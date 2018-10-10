+(function() {
	var clock = document.querySelector('.clock');
	var hours = "time.getHours() : time.getHours()";
	var minutes = "time.getMinutes() : time.getMinutes()";
	var seconds = "time.getSeconds() : time.getSeconds()";

	var myclock = setInterval(function(){
		var time = new Date();		
		var hours = time.getHours();
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();

		clock.innerHTML = [ 
			hours < 10 ? '0' + hours : hours,
			minutes < 10 ? '0' + minutes : minutes,
			seconds < 10 ? '0' + seconds : seconds			 
		].join(':');	
	}, 1000);
}());

(function() {
	var bomb = document.querySelector('.infobomb');
	var stopbomb = document.querySelector('.stopbomb');
	var toboomtime = 11;

	var boomtimer = setInterval (function() {
		var boom = toboomtime--;
		bomb.innerHTML = (boom);

		if (boom < 1) {
			alert('BIG BADA BOOM!!');
			clearInterval(boomtimer);	
				
		};

	}, 900);

	stopbomb.onclick = function stopfunc() {
		clearInterval(boomtimer);
	};

}());

(function() {
	var disp1 = document.querySelector('.display1');
	var disp2 = document.querySelector('.display2');	
	var disp3 = document.querySelector('.display3');
	var stopbtn = document.querySelector('.stop');
	var pausebtn =  document.querySelector('.pause');
	var startbtn =  document.querySelector('.start');
	var resetbtn =  document.querySelector('.reset');
	var stopwatch, starttime = 0;
	var startime2, starttime3 = 0;

		
			startbtn.onclick = function startInrval() {
				stopwatch = setInterval (function() {
					starttime++;
					disp1.innerHTML = (starttime);

				}, 150);
			} 

			pausebtn.onclick = function pausewatch1() {
					clearInterval(stopwatch);

					stopwatch2 = setInterval (function() {
						starttime2 = starttime++;					
					disp2.innerHTML = (starttime2);
					}, 150);
				};

				stopbtn.onclick = function stopwatch1() {
					clearInterval(stopwatch);
					clearInterval(stopwatch2);
					//clearInterval(stopwatch3);
					starttime = 0;
					starttime2 = 0;
					//starttime3 = 0;
					disp1.innerHTML = (starttime);
					disp2.innerHTML = (starttime2);

				};

				

				resetbtn.onclick = function resetwatch1() {	
						disp1.innerHTML = '';
						disp2.innerHTML = '';
							clearInterval(stopwatch);
					clearInterval(stopwatch2);
						
					
					

				}



			



}())


