/**
 * Created by MuhammadAsad on 09/08/2016.
 */
'use strict';
angular.module("app.shell",[])
.config(configuration);

function configuration($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('shell',{
            url : '/',
            views : {
                '@' : {
                    templateUrl : 'src/shell/shell.html'
                },
                'topNavBar@shell' : {
                    templateUrl : 'src/shell/topNavBar.html'
                },
                'search@shell' : {
                    templateUrl : 'src/search/search.html',
                    controller : 'searchController as vm'
                }
            }
        })
}