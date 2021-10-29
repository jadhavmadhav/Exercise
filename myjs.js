function toggle(){
    document.getElementById("leftside").style.display="block"
    document.getElementById("toggle-btn").style.display="none"
    document.getElementById("close").style.display="block"; 
   

}

 function Close(){
 document.getElementById("sidebar").style.display="none"
 document.getElementById("close").style.display="none";
 document.getElementById("toggle-btn").style.display="block"
 window.onclick(myfun());
  function myfun(){
    document.getElementById("close").style.display="none";
   }
 }