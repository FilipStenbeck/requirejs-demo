define(["jquery"], function($) {

  console.log('DeveloperList');
  "use strict";
  
  return {
    setTitle : function(text) {
      $('title').html(text);
      $('#title').html(text);
    },
    createList : function (developers) {
      developers.forEach(function(developer){
        $('#awsome-coders').append('<li>' + developer.getName() + ', who believes in ' + developer.getFavScriptingLanguage());
      });
    }
  };
});