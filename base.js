console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//variable to store each blog post in the submit form
// var blogText;
//an array to store all the blog posts
function Post(body){
	this.body = body;
	this.createdAt = new Date();
	this.comments = [];

}

//variable to keep track of how many posts
var postCount = 0;
var commentButton; 
var commentInput;
var commentDiv;
var postNumber;

  //what to do when form is submitted
 $('#blogPost').submit(function(e) {
 	e.preventDefault();

 	//set variable blogText to the value of the form
 	var blogText = $('#blogText').val();

 	//variable for the time
 	var blogTime = new Date();

 	//create new obj with the post
 	new Post(blogText);

 	//variable for the comment input form
 	commentInput = "<form type='text' class='commentInput'><input type='text' class='form-control commentText' placeholder='Type your comment here...'>";
 	// //variable for the comment submit button
 	commentButton = "<button type='submit' class='btn-group-xs'>Add Comment</button></form>";
 	//variable for the div to hold the comments
 	commentDiv = "<div class='col-md-8 col-md-offset-2 allComments'></div>";

 	//append the new post to the page with a time stamp and comment button if something is written
 	if($('#blogText').val()) {
 		//add one to the count
 		postCount++;
 		postNumber = postCount;
 		$('#allPosts').prepend("<div><form class='blogPosts'>" + "<font size='4'><big>Post " + postCount + ":<br></big>  " + blogText + "<br><em>Posted at:  " + blogTime + "</em><hr><big>Comments:</big><br></font></form>" + commentDiv + commentInput + commentButton + "</div>");
 		
 		console.log(blogText + " " + blogTime);
 	}
 	//reset the form to blank
 	$('#blogText').val("");
 	
 	addCommentSubmitHandler();

 });


var commentBody;

//  //What to do when comment button is clicked
 function addCommentSubmitHandler() {
 	$('.commentInput').submit(function(e) {
 	e.preventDefault();
  	commentBody = $(this).parent().find('.commentText').val();
 	 	console.log(this);
 	 // $(this).parent().find('.allComments').append(commentBody +"<br>");
 	if(commentBody) {
 		$(this).parent().find('.allComments').append("<font size='3'>" + commentBody + "</font><br><br><br>");
 	}
 	// Post.comments.push(commentBody);
 	console.log("hello" + commentBody);
 	$('.commentText').val("");
 });
 }
 


});
// 





