define('scribe-plugin-tt-insert-image', function(){

  'use strict';

  return function(){
    return function(scribe){

        var TTInsertImageCommand = new scribe.api.Command("insertImage");

        TTInsertImageCommand.nodeName = 'IMG';

        TTInsertImageCommand.execute = function() {
            var imgLink = "http://gooel.com";

            scribe.api.SimpleCommand.prototype.execute.call(this, imgLink);
        };

        TTInsertImageCommand.queryState = function() {
           var selection = new scribe.api.Selection();
           return !! selection.getContaining(function(node) {
               return node.nodeName == this.nodeName;
           }).bind(this);
        };

        scribe.commands.tt_insertImage = TTInsertImageCommand;

    };
  };
});
