/**
 * Created by MuhammadAsad on 09/08/2016.
 */
'use strict';
angular.module('app.search',['app.twitter'])
    .controller('searchController',searchController);

function searchController($scope,twitterService){
    var vm = this;
    vm.searchTweet = searchTweet;
    init();


    function init(){
        vm.searchQuery = "Cricket";
        vm.searchTweet();
    }

    function searchTweet(){
        vm.isLoader = true;
        if(vm.searchQuery.length){
            twitterService.searchTweets(vm.searchQuery,function(results){
                if(results.statuses){
                    console.log(results.statuses);
                    vm.searchResults =  results.statuses;
                    vm.isLoader = false;
                    $scope.$digest();
                }
                else{
                    console.log(results.errors[0].message);
                }
            })
        }
    }
}