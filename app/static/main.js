$(document).ready(function(){
	console.log("ready!");

	$("#try-again").hide()

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
				if(results.items.length > 0){

					$("input").hide();
					$("#try-again").show();

					var randomNum = Math.floor(Math.random() * Object.keys(results.items).length);

					$("#results").html('<a href="' + results.items[randomNum].html_url + '" >' + 
										results.items[randomNum].login +
										'</a><br><img src="' + results.items[randomNum].avatar_url + 
										'" class="avatar" >'
										);

					// $("input").val("")	
				}
				else{
					$("#results").html('Fuck! no programmer available. Please try again!')
				}
				
			},
			error: function(error){
				console.log(error);
			},
		});

	});

	$("#try-again").on('click', function(){
		$('input').val('').show();
		$("#try-again").hide();
		$("#results").html('');	
	});

});