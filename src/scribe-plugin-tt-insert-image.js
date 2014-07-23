define('scribe-plugin-tt-insert-image', function(){

  'use strict';

  return function(){
    return function(scribe){

        var TTInsertImageCommand = new scribe.api.Command("tt_insertImage");

        TTInsertImageCommand.nodeName = 'img';

        TTInsertImageCommand.execute = function() {
            alert("Here's a story, all about how");
            alert("my life got flipped, turned upside down");
        };

    };
  };
});
