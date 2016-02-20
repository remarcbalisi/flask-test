$(document).ready(function(){
	console.log("ready!");

	$("form").on("submit", function(){
		console.log("the form has been submitted!");

		var valueOne = $('input[name="location"]').val()
		var valueTwo = $('input[name="language"]').val()
		console.log(valueOne, valueTwo);

		$.ajax({
			type: "POST",
			url: "/",
			data: {first:valueOne, second:valueTwo},
			success: function(results){
				console.log(results.items[0]);

				$("#results").html('<a href="' + results.items[0].html_url + '" >' + results.items[0].login)
				$("input").val("")
			},
			error: function(error){
				console.log(error);
			},
		});

	});

});