/**
 * Created by Google on 4/21/2017.
 */

(function() {
    'use strict';

    angular
        .module('letallApp')
        .controller('writeController', writeController);

    writeController.$inject = ['$scope', '$state'];

    function writeController ($scope, $state) {
        var vm = this;
        var wordCount=0;
        var c=1,fadding=0;
        var prevChar=0;
        var e1 =  document.getElementById('bg_audio');

        $scope.startTyping = function(){
            $("#text").focus();
            $('#bg_audio').trigger("play");
        }

        function event() {
            if(c!=0)
            {
                c--;
                console.log('C is ' + c);
            }
            if(c==1){
                $('#bg_audio').animate({volume: 0.0}, 800);
                console.log('fadding0 volume. C is ' + c);
                fadding=1;
            }

            if((c<1) && (!e1.paused))
            {
                console.log('pause ' + c);
            }
        }

        $("textarea").keypress(function(e){

            var key = e.charCode || e.keyCode || 0;
            if(key == 32)
            {
                if(prevChar!=32)
                {
                    console.log("count = " + ++wordCount);
                    $("#totalWordCount").html("<b>Atleast write "+(800-wordCount)+ " more...</b>");
                }
            }
            prevChar = key;
            if(e1.paused)
            {
                console.log('play');
                $('#bg_audio').trigger("play");
            }
            if(c==0 || fadding==1){
                c=3;
                $('#bg_audio').stop(true);
                $('#bg_audio').animate({volume: 1.0}, 1000);
                console.log('increase volume');

                fadding=0;

            }
        });

        function getEvent()
        {
            if(c > 0)
            {
                event();
            }
        }

        window.setInterval(event, 2000);

    }
})();

