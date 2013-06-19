require.config({
  // expose jquery 
  paths: {
    "jquery": "../components/jquery/jquery"
  }
});

  require(['main'], function(){ 
      console.log('Require');
  });






