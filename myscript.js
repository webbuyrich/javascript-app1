window.onload = function(){


	/* WRITE DATE AND TIME */
	var myDate = new Date();
	var dateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
	var dateLoc = document.getElementById("dateField");
	dateLoc.innerHTML = "Page Rendered on " + dateString;
}
