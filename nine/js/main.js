//alert("Hi");
+(function () {
	let stopdiv = document.getElementById('sidebarleft');
	let stopcoord = stopdiv.getBoundingClientRect();
	let wrapp = document.querySelector('.wrapper');
	let wrappcoord = wrapp.getBoundingClientRect();
	let nav = document.getElementsByClassName('mainnav')[0];
	let nacc = nav.getBoundingClientRect();
	let cont = wrapp.getElementsByClassName('content');
	let img = document.getElementById('imgwrapp');
	let imgcoord = img.getBoundingClientRect();
	let imgnav = document.getElementsByClassName('imginnav');
	let foto = document.getElementById('foto');
	let btn = document.getElementById('prv');

	//let imgnavcoord = imgnav.getBoundingClientRect();

	
		window.onscroll = function(){
			var imgcoordnow = pageYOffset - imgcoord.top;
			var stopleftdiv = pageYOffset - stopcoord.top;			
			if (imgcoordnow >= 0) {
				img.style.cssText = "position: fixed; top: 0; right: 10px;";
				foto.style.cssText = "width: 120px; height: 50px;";
				nav.style.cssText = "height: 50px";
				//imgnav.style.cssText = "display: block";
			}
			else if (imgcoordnow < 0) {
				img.style.cssText = "";
				foto.style.cssText = "";
				nav.style.cssText = "";

			}
		

			if(stopleftdiv > 0) {
				stopdiv.style.cssText = "position: fixed; top: 45px; left: 50%; width: 135px; opacity: 1;";
							
			}
			else if(stopleftdiv <= 0){
				stopdiv.style.cssText = "";
			}


		}
		btn.addEventListener('click', function(event) {
			window.scrollTo(0, 0);
		})

}())

