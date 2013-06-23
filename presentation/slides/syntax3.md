<section>
	 # Definera en modul
	<pre>
		<code  data-trim contenteditable="true">			 .
define(['a','b','jquery'], function(a, b, $) {
    
	return {

	    //Kör en metod på a
	    runMethodfromA : function () {
	    	a.someMethod();
	   },
	   
	   doJqueryMagic : function () {
	    $('#foo').fadeIn('slow');
	   }
	}

</code>
</pre>
</section>




