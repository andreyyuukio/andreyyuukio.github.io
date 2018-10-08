+(function(){
  var table = document.querySelector("table");
  //var cell = table.getElementsByTagName("td")
  var cell = table.querySelectorAll('td'); 
  var step = "0";
  var screen = document.querySelector('#screen');
  screen.innerHTML = "Ходят крестики";
  console.log(screen);
	table.onclick = function(event){       
    	if(event.target.className=="cell"){
				if(step % 2 == 0){
					event.target.innerHTML = "x";
					screen.innerHTML = "Ходят нолики"					
					//event.target.innerHTML = "<img src="../images/pent.jpg">";					
				}
				else{
					//event.target.innerHTML = "<img src="../images/run.jpg">	"
					event.target.innerHTML = "0";
					screen.innerHTML = "Ходят крестики"	
				}
				step++;
				checking();
		}
	};
     
function checking() {

	if (cell[0].innerHTML=="x" && cell[1].innerHTML=="x" && cell[2].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[3].innerHTML=="x" && cell[4].innerHTML=="x" && cell[5].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[6].innerHTML=="x" && cell[7].innerHTML=="x" && cell[8].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[0].innerHTML=="x" && cell[3].innerHTML=="x" && cell[6].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[1].innerHTML=="x" && cell[4].innerHTML=="x" && cell[7].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[2].innerHTML=="x" && cell[5].innerHTML=="x" && cell[8].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[0].innerHTML=="x" && cell[4].innerHTML=="x" && cell[8].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}
	if (cell[2].innerHTML=="x" && cell[4].innerHTML=="x" && cell[6].innerHTML=="x") {
		alert("Победили крестики!");
		clearField();
	}

	if (cell[0].innerHTML=="0" && cell[1].innerHTML=="0" && cell[2].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[3].innerHTML=="0" && cell[4].innerHTML=="0" && cell[5].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[6].innerHTML=="0" && cell[7].innerHTML=="0" && cell[8].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[0].innerHTML=="0" && cell[3].innerHTML=="0" && cell[6].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[1].innerHTML=="0" && cell[4].innerHTML=="0" && cell[7].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[2].innerHTML=="0" && cell[5].innerHTML=="0" && cell[8].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[0].innerHTML=="0" && cell[4].innerHTML=="0" && cell[8].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	if (cell[2].innerHTML=="0" && cell[4].innerHTML=="0" && cell[6].innerHTML=="0") {
		alert("Победили нолики!");
		clearField();
	}
	var both = false;      
    top: for(var i = 0; i < cell.length; i++) {
        if(cell[i].innerHTML == '') {
          both = false;
          break top;
        }
        else {
          both = true;
        }
    };
      if(both){
        alert("Ничья");
        clearField();
      }


}; 

function clearField(){
    var Step = "0";
    for(var i = 0, lenght = cell.length; i < lenght; i++){
   
      cell[i].innerHTML = '';
    }
  };   
    
}())
