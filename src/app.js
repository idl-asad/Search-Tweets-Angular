/**
 * Created by MuhammadAsad on 09/08/2016.
 */
'use strict';

angular.module("app",['ui.router','app.shell','app.search'])
    .run(function(twitterService){
        twitterService.initializeCodeBird();
    })
    .controller("testController",function($scope){


       $scope.test = "test is ok";
    });

