console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var blogText;
  


 $('#blogPost').submit(function(e) {
 	e.preventDefault();
 	blogText = $('#blogText').val();
 	$('#blogText').val("");
 	$('#allPosts').append("<textarea>" + blogText + "</textarea>" + "<hr>");
 });

});
// 