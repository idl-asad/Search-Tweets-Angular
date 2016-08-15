/**
 * Created by MuhammadAsad on 10/08/2016.
 */
'use strict';
angular.module('app.twitter',[]).factory("twitterService",function(){
     var cb =new Codebird;

    function _initializeCodeBird(){
        cb.setConsumerKey("gvhba2wOvUbttTBc5Crk797BW", "f5XRs0NGwcLZFVBlqxCZbhAA0iV1CZ1uPjvauYWpfyKyo813wT");
        cb.setToken("762890789244444672-bXWmdp5Vtvf6JzhwgrxuFFihOT2Kjdm", "LIjBEAyKVPEkRNpylHyBpeSvVRXN6kUU89cWpIN7y144t");
        cb.__call(
            "oauth2_token",
            {},
            function (reply, err) {
                if (err) {
                    console.log("error response or timeout exceeded" + err.error);
                }
                if (reply) {
                    cb.setBearerToken(reply.access_token);
                }
            }
        );
    }

    function _searchTweets(query,successCB){
        var params = {
            q: query
        };
        cb.__call(
            "search_tweets",
            params,
            successCB,
            true
        );
    }
    return {
        initializeCodeBird : _initializeCodeBird,
        searchTweets : _searchTweets
    }

});
