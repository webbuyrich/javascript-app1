window.onload = function(){


	/* WRITE DATE AND TIME */
	var myDate = new Date();
	var dateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
	var dateLoc = document.getElementById("dateField");
	dateLoc.innerHTML = "Page Rendered on " + dateString;

	//Days till January 1, 2017
	var today = new Date();
	var then = new Date();
	then.setFullYear(2017, 0, 1);
	var diff = then.getTime() - today.getTime();
	diff = Math.floor(diff/ (1000 * 60 * 60 * 24));
	var dateLocs = document.getElementById("countdown");
	dateLocs.innerHTML = "There are " + diff + " days left until January 1, 2017";

	//PAGE RENDERED 
	var bottom = new Date();
	var diff = (bottom.getTime() - Date.now())/1000;
	var finaltime = diff.toPrecision(5);
	var dateLoca = document.getElementById("pageRender");
	dateLoca.innerHTML = "Page Rendered in " + finaltime + " seconds";

	//REG EX
	var myString = "http://www.espn.com";
	var myRegex = /http:\/\/\w+\.(.*)/i;
	var results = myRegex.exec(myString);
	var regexLoc = document.getElementById("regexDomain");
	regexLoc.innerHTML = "The result of escaping all characters except the domain and .* of http://www.espn.com = " + results[1];

	//REG EX
	var emailAddr = "suehring@braingia.com";
	var myRegex = /\.com/;
	var checkMatch = emailAddr.match(myRegex);
	var regexContainString = document.getElementById("regexContainString");
	regexContainString.innerHTML = "Determine whether a given email address contains the string .com = " + checkMatch[0];

	//REFERENCES 
	 //set value of myNum to 20
	 var myNum = 20;

	 //create new variable, anotherNum, copy contents of myNum
	 var anotherNum = myNum;

	 //change value of myNum
	 myNum = 1000;

	 //display contents of both variables
	 var numberDisplay = document.getElementById("numberDisplay");
	 numberDisplay.innerHTML = "The first number is " + myNum + ", and the second number is " + anotherNum;

	
}
