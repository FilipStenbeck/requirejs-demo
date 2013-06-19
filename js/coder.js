define(function () {
    
    "use strict";
        
    return {
        createCoder : function (firstName, preferedlanguage) {
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
    };
});