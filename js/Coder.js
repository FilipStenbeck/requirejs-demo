define(function () {
    "use strict";
     console.log('Coder');   
    
    return function (firstName, preferedlanguage) {
        var name = firstName || 'unamed';
         var  like = preferedlanguage || 'nothing';
        return {
            getName : function () {
                    return name;
            },
            getFavScriptingLanguage : function () {
                    return like;
            }   
        }; 
    }

});