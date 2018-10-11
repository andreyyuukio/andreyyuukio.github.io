+(function() {
	
	var slider = document.querySelector(".slider");
	//let fotowrp = document.querySelectorAll(".fotowrapp");
	var fotowrp = document.getElementsByTagName('li');
	
	var shownext = setInterval (function() {
		/*for (var i = 0; i < fotowrp.lenght; i++) {
			fotowrp[i].style.zInsex = fotowrp.lenght - i;
			if (fotowrp[i].nextElementSibling) {
				fotowrp[i].style.right = "-100%"
			}	
			
		}*/

		for (var i = 0; i < fotowrp.lenght; i++){
			//fotowrp[i].style.zInsex = i - 1;		
		};
		var active = document.querySelector('.active');

	   	 if (active.nextElementSibling) {
		       active.style.right = "-100%";
		       active.classList.remove('active');
		       active.nextElementSibling.classList.add('active');
		   }
		  /* else{
		   	 active.style.right = "+100%";
		   	 active.classList.remove('active');
		     active.nextElementSibling.classList.add('active')
		   }	*/	
		
	}, 1500);

	slider.onclcik = function() {
		clearInterval(shownext);		
	}


}())

 