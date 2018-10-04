!(function(){

  var todolist = document.getElementById('input');
  var addbtn = document.getElementById('button');
  var newlist = document.getElementById('ull');
 /* var txt = document.getElementsByClassName('input-txt');
  var btn = document.getElementsByClassName('input-btn');
  var newlist = document.getElementsByClassName('newlists');*/
  addbtn.onclick = function(){ 

    var mynewlist = document.createElement('li'); 
    mynewlist.innerHTML = todolist.value; 
    mynewlist.className = "newli"   
    newlist.appendChild(mynewlist);    
    todolist.value = '';   
    var escbtn = document.createElement('button');
  		escbtn.innerHTML = "delete";
   		escbtn.className = "deletebutton"; 
  		 newlist.appendChild(escbtn);      
       
          escbtn.onclick = function(event){
            var ullfordel = document.getElementById('ull');
            var lifordel = ullfordel.getElementsByTagName('li'); 
          var btnoff = document.getElementsByClassName('deletebutton');
            var target = event.target;
                 if (target.className != 'deletebutton') {
                     return;
                    btnoff.remove();
                    lifordel.remove();
                   };             
         };

  }; 
          /* escbtn.onclick = function(){

            var ullfordel = document.getElementById('ull');
            var lifordel = ullfordel.getElementsByTagName('li')[0]; 
          var btnoff = document.getElementsByClassName('deletebutton')[0];         
            btnoff.remove();
            lifordel.remove();
            console.log(lifordel);              
               
         };*/ 
}());






/*for( var i = 0; i <= ullfordel.length - 1; i++) {
              var lifordel = document.getElementsByTagName('li');
                        
             } */     