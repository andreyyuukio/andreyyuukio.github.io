
var head = document.getElementsByTagName("head");
/*var bodyCol = prompt('body color', 'red');
head.style.background = "bodyCol.value";*/

var list = document.getElementsByTagName("ul");
var link2 = document.getElementsByClassName("two")[0];
link2.style.color = "red";

/*var li2 = list.getElementByTagName('li');*/
var users = document.getElementById("title");
users.style.color = "brown";
var aa = document.getElementById("123");
aa.style.display = "none";


var newList = document.createElement('ul');
newList.id = "myList";
var newListAdress = document.body
newListAdress.appendChild(newList);
newList.style.float = "right";

 //создаём новые элементы li
var  newLi1 = document.createElement('li');
	 newLi2 = document.createElement('li');
	 newLi3 = document.createElement('li');
	 newLi4 = document.createElement('li');
	 newLi5 = document.createElement('li');
/*добавляем в созданые эл-ты li HTML разметку и присваиваем 
необходимые стили, классы и id*/
newLi1.id = "first";
newLi1.innerHTML = "Альбина";
newLi2.className = "class-two";
newLi2.innerHTML = "Абдул";
newLi3.style.color = "red";
newLi3.innerHTML = "Аркадий";
newLi4.style.display = "none";
newLi4.innerHTML = "Афанасий";
newLi5.innerHTML = "<strong>Акакий</strong>";
/*присваиваем в новую переменную контейнер где будут расположены новые элементы*/
var newUlContentAdress = document.getElementById("myList")
/*console.log(myList);*/
//добавляем созданные ранее эл-ты li в конец указанного контейнера
newUlContentAdress.appendChild(newLi1);
newUlContentAdress.appendChild(newLi2);
newUlContentAdress.appendChild(newLi3);
newUlContentAdress.appendChild(newLi4);
newUlContentAdress.appendChild(newLi5);


//var r1 = document.getElementsByClassName("row")[0];
var col1_1 = document.getElementsByClassName("col")[0];
var col2_1 = document.getElementsByClassName("col")[1];
var col3_1 = document.getElementsByClassName("col")[2];
var col4_1 = document.getElementsByClassName("col")[3];
col1_1.innerHTML = "1.1";
col2_1.innerHTML = "2.1";
col3_1.innerHTML = "3.1";
col4_1.innerHTML = "4.1";
var col1_2 = document.getElementsByClassName("col")[4];
var col2_2 = document.getElementsByClassName("col")[5];
var col3_2 = document.getElementsByClassName("col")[6];
var col4_2 = document.getElementsByClassName("col")[7];
col1_2.innerHTML = "1.2";
col2_2.innerHTML = "2.2";
col3_2.innerHTML = "3.2";
col4_2.innerHTML = "4.2";
var col1_3 = document.getElementsByClassName("col")[8];
var col2_3 = document.getElementsByClassName("col")[9];
var col3_3 = document.getElementsByClassName("col")[10];
var col4_3 = document.getElementsByClassName("col")[11];
col1_3.innerHTML = "1.3";
col2_3.innerHTML = "2.3";
col3_3.innerHTML = "3.3";
col4_3.innerHTML = "4.3";
var col1_4 = document.getElementsByClassName("col")[12];
var col2_4 = document.getElementsByClassName("col")[13];
var col3_4 = document.getElementsByClassName("col")[14];
var col4_4 = document.getElementsByClassName("col")[15];
col1_4.innerHTML = "1.4";
col2_4.innerHTML = "2.4";
col3_4.innerHTML = "3.4";
col4_4.innerHTML = "4.4";
