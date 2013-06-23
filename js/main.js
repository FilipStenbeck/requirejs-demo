define(['Coder','developerList'], function(Coder, developerList) {
    //init
    console.log('Main');
   
    //Create developers array
    var developers = [];
   
    // and add a few awsome developers to it
    developers.push(new Coder('Paul Irish', 'JavaScript'));
    developers.push(new Coder('Homer Simpson', 'donuts'));
    developers.push(new Coder('The nihilist'));
  
    //Handle DOM-stuff in a seperate module
    developerList.setTitle('List of developers');
    developerList.createList(developers);

});
