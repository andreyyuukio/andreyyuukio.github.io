var addFunctionHome = function() {
	//var content = document.getElementsByClassName('Prof-content' && 'Contact-content');
	var profcont = document.getElementsByClassName('Prof-content');
	var contC = document.getElementsByClassName('Contact-content')	
	profcont[0].classList.remove('active');
	contC[0].classList.remove('active');
	var contH = document.getElementsByClassName('Home-content');
	contH[0].classList.add('active');
};

var addFunctionProfile = function() {
	var contH = document.getElementsByClassName('Home-content');
	var contC = document.getElementsByClassName('Contact-content')	
	contH[0].classList.remove('active');
	contC[0].classList.remove('active');
	var profcont = document.getElementsByClassName('Prof-content');
	profcont[0].classList.add('active');
};

var addFunctionContact = function() {
	var contH = document.getElementsByClassName('Home-content');
	var profcont = document.getElementsByClassName('Prof-content');	
	contH[0].classList.remove('active');
	profcont[0].classList.remove('active');
	var contC = document.getElementsByClassName('Contact-content');
	contC[0].classList.add('active');
};