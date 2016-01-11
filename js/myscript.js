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
}
