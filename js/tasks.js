$(function(){
	var quoteapi = "https://api.quotable.io/random";
	
	$.getJSON(quoteapi).done(function(data){
		console.log(data);
		var quote = $(".random-quote");
		quote.empty();
		quote.append("<p style='font-family: Anton; font-size:20px; color:green'>" + data.content + "</p>");
		quote.append("<span style='float: right;font-family: Anton; color:green'>" + "--- " + data.author + "</span>");
		// var author = $("#author");
		// author.empty();
		// author.append("<br><p> " + data.author + "</p>");

	});
});


$(".taskinput").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val()==="") return;
		$("ul").prepend("<li><span class='left'><i class='fa fa-trash'></i></span> <span class='text'> "+$(this).val()+"</span><span class='right'><i class='fa fa-pencil'></li>"); // For Dynamic code Completion
		$(this).val("");
	}
});
$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

$("ul").on("click", "span.text", function(event) {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "span.right", function(event) {
	var parent = $(this).parent();
	var oldVal = parent.text();
	parent.html("<input type='text' class='editinput'>");
	$(".editinput").keypress(function(e) {
		if(e.which === 13) {
			if($(this).val() === "") {
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+oldVal+"</span><span class='right'><i class='fa fa-pencil'>");	
			}
			else {
				var newVal = $(this).val();
				parent.html("<span class='left'><i class='fa fa-trash'></i></span><span class='text'>  "+newVal+"</span><span class='right'><i class='fa fa-pencil'>");
			}
		}
		e.stopPropagation();
	});
	event.stopPropagation();
});