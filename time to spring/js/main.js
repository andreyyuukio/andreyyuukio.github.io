timeend = new Date();
timeend= new Date(2019, 2, 1, 0);
function time() {

	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	timestr=today + " грёбаных дней; " + thour+" долгих часов; " + tmin + " не очень долгих минут; " + " и " + tsec + " каких-то там секунд";
	document.getElementById('time').innerHTML = timestr;
	window.setTimeout("time()",1000);

}