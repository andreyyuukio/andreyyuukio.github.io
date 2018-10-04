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
    escbtn.style.float = "left";
    newlist.appendChild(escbtn);
        escbtn.onclick = function() {

          var ullfordel = document.getElementById('ull');
          var lifordel = ullfordel.getElementsByTagName('li')[0]; 
          var btnoff = document.getElementsByClassName('deletebutton')[0];         
              btnoff.remove();
             /*for( var i = 0; i <= ullfordel.length - 1; i++) {
              var lifordel = document.getElementsByTagName('li');*/
              lifordel.remove(); 
            
            // }         
               
        }
  
    }  
}());
