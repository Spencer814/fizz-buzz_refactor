function getCount() {
	var fizzbuzzPrompt = parseInt(prompt("Please enter a number"));
	return	fizzbuzzPrompt;
}

function FizzBuzz(limit) {
	for (var i = 1; i <= limit; i++) {
	
		// Replaces numbers divisible by both 3 and 5 with “FizzBuzz”
		if (i % 15 === 0) {
	        document.write("FizzBuzz<br>");
		}
		
		// Replaces numbers divisible by 5 with "Buzz”
		else if (i % 5 === 0) {
	        document.write("Buzz<br>");
		}
		
		// Replaces numbers divisible by 3 with “Fizz”	
		else if (i % 3 === 0) {
	        document.write("Fizz<br>");
		}
		
		// Processes numbers not divisible by 3 or 5 
		else {
	        document.write(i + "<br>");
		}

	}
}

FizzBuzz(getCount());