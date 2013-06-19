define(['coder','developerList'], function(coder, developerList) {
    //init
    console.log('Main');
    developerList.setTitle('List of developers');
   
    //Create developers list
    var developers = [];
   
    // and add a few awsome developers to it
    developers.push(coder.createCoder('Paul Irish', 'JavaScript'));
    developers.push(coder.createCoder('Homer Simpson', 'donuts'));
    developers.push(coder.createCoder('The nihilist'));
  
    //Handle DOM-stuff in a seperate module
    developerList.createList(developers);

});
