console.log(window)
+(function() {
	let info = document.querySelector('.infodiv');	
	let name = document.getElementById('name');
	let phone = document.getElementById('phone');
	let mail = document.getElementById('mail');
	let pass = document.getElementById('pass');
	let pass2 = document.getElementById('pass2');
	let button = document.getElementById('send-btn');
	let forminfo = document.querySelector('#forminfo');

		
	
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

           let passCheckGlobal = /(?=.*[0-9]+)(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z]+){8,}/g;
           //	let passCheckGlobal = /([0-9]+)([A-Z]+)([a-z]{2,20})([!@#$%^&*-_=+]*)/;  [0-9a-zA-Z!@#$%^&*]
           	let passckecking = passCheckGlobal.test(pass.value);
           		if (passckecking != true) {
           			alert("choose more dificule password!")
           		}
           		console.log(pass.value);

           		forminfo.innerHTML += ("name: " + name.value + "<br>");
           		forminfo.innerHTML += ("mail: " + mail.value + "<br>");
           		forminfo.innerHTML += ("phone: " + phone.value + "<br>");
           		forminfo.innerHTML += ("password : " + pass.value);

           			if (pass.value != pass2.value){
           				alert("password is ancorrect");
           				forminfo.innerHTML = "";
           			}
           							  
           							  
		}




		
}());

