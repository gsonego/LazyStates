!function() {
    var appInjector, appStateProvider, app = angular.module("lazyapp", ['ui.router', 'oc.lazyLoad']);
    
    app.config(function($stateProvider, $urlRouterProvider, $injector) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/components/home/home.html',
                controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise(function ($injector, $location) {
            //console.log("nao achei a rota solicitada");
            // aqui dá pra fazer algum tratamento quando
            // a rota não for conhecida... por enquanto vamos para a home
            return '/home';
            
            //var state = $injector.get('$state');
            //state.go('404', { url: $location.path() }, { location: true });
        });        
        
        //$urlRouterProvider.otherwise('/home');
        
        // Cache injector
        appInjector = $injector;
        appStateProvider = $stateProvider;
    });

    app.run(function ($rootScope, $state, $log, $q, $ocLazyLoad) {
        //$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
        //    console.log('$stateChangeStart to '+toState.to+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
        //});
        //
        //$rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
        //    console.log('$stateChangeError - fired when an error occurs during transition.');
        //    console.log(arguments);
        //});
        //
        //$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        //    console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
        //});
        //
        //$rootScope.$on('$viewContentLoaded',function(event){
        //    console.log('$viewContentLoaded - fired after dom rendered',event);
        //});
        
        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
            //$log.log("$stateNotFound unfoundState: ", unfoundState.to);
            //$log.log("$stateNotFound fromState: ", fromState);
            //$log.log("$stateNotFound fromParams: ", fromParams);

            // funcoes de apoio
            var toLowerCamelCase = function (str) {
                return str.replace(/[^A-Za-z0-9]/g, ' ').replace(/^\w|[A-Z]|\b\w|\s+/g, function (match, index) {
                    if (+match === 0 || match === '-' || match === '.' ) {
                        return ""; // or if (/\s+/.test(match)) for white spaces
                    }
                    return index === 0 ? match.toLowerCase() : match.toUpperCase();
                });
            };

            var getFileName = function(state, type) {
                var stateParts = state.split(".");
                var firstPart = stateParts[0];

                var fileName = toLowerCamelCase(state); //.replace(/[.]/g, "_");
                var filePath = firstPart + "/" + type + "/" + fileName + "." + type;
                
                var retorno = 'app/components/' + filePath;
                return retorno;  
            };
            
            var getControllerName = function(controllerStr) {
                var str = controllerStr.replace(/[.]/g, ' ');
                
                var toPascalCase = str.replace(/\w\S*/g, function(tStr) { 
                    return tStr.charAt(0).toUpperCase() + 
                           tStr.substr(1).toLowerCase();
                });
                
                return toPascalCase.replace(/ /g, '') + 'Ctrl';
            };

            // inicia a análise de estados
            var toState = unfoundState.to;
            var states = unfoundState.to.split('.');
            var statePart = '';
            var sep = '';
            var scriptList = [];
            
            for(var i=0; i < states.length;i++) {
                statePart = statePart + sep + states[i];
                sep = '.';
                
                if (!$state.get(statePart)) {
                    //$log.log(statePart + ' não está configurado!');
                    
                    var scriptPart = getFileName(statePart, "js");
                    
                    scriptList.push(scriptPart);
                    
                    appStateProvider.state(statePart, 
                    {
                        url: '/' + statePart,
                        templateUrl: getFileName(statePart, "html"),
                        controller: getControllerName(statePart)
                    });
                    
                //} else {
                    //$log.log(statePart + ' já está configurado!');
                }
            }

            // carrega os scripts
            //$log.log('carregando scripts');
            //$log.log(scriptList);
            
            $ocLazyLoad.load(scriptList).then(function() {
                //$log.log('scripts carregados');
                if ($state.get(toState)) {
                    return $state.go(toState);
                }
            });
            
        });
    });
}();