console.log(window)
+(function() {
	let info = document.querySelector('.infodiv');	
	let name = document.getElementById('name');
	let phone = document.getElementById('phone');
	let mail = document.getElementById('mail');
	let pass = document.getElementById('pass');
	let button = document.getElementById('send-btn');

		
	
		button.onclick = function() {	

			let nameCheckGlobal = /^[A-Z]?[a-z]{1,12}\s?[A-Z]?[a-z]{1,12}?/;
			let namechecking = nameCheckGlobal.test(name.value);
			if(namechecking != true) {				
				alert("The name is ancorrect");
			}
           console.log(name.value);

           	let mailCheckGlobal = /^\w+@\w+\.[a-z]{2,4}/;
			let mailchecking = mailCheckGlobal.test(mail.value);
			if (mailchecking != true) {
				alert("The mail-adress is not true");
				//info.classList.add('active');
				//info.innerHTML= "The mail-adress is not true";
			}
           console.log(mail.value);

           let phoneCheckGlobal = /^(\+)?(\d)+?/;
           let phonechecking = phoneCheckGlobal.test(phone.value);
           		if (phonechecking != true) {
           			alert("phone is ancorrect");
           		}
           		console.log(phone.value);

           	let passCheckGlobal = /^([0-9]?)([A-Z]?)([0-9]?)([a-z]{1,20})([0-9]?)?/;
           	let passckecking = passCheckGlobal.test(pass.value);
           		if (passckecking != true) {
           			alert("choose more dificule password!")
           		}
           		console.log(pass.value);
		}



		
}());

