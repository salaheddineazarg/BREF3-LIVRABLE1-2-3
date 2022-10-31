var total = 0;
function moveToCarte(el){
    
    var clone = el.cloneNode(true);
    total += parseInt(el.children[2].children[0].children[0].textContent);
    document.getElementById("pantest").appendChild(clone);
    document.getElementById("total").value = total ;
    
   
    
}



function test () {

    let test1 = document.querySelector(".mytest");
    let pan = document.querySelector(".pantest");
    test1.style.display="flex"
    pan.append(test1);
    
}
function test1 () {
 
    let test1 = document.querySelector(".mytest");
    let pan = document.querySelector(".pantest");
    test1.style.display="flex"
    pan.append(test1);
    
}











// TOGGLE
function toggle(){
    var togle = document.getElementById("togle-menu");
    togle.style.display="flex";
   var close = document.getElementById("close_menu");
   close.style.display="block";
    
} 
function toggle0(){
    var togle = document.getElementById("togle-menu");
    togle.style.display="none";
} 

// CATEGORY
function menus(){
    var salad =document.querySelector(".menu-card");
    salad.style.display="grid";
    var obentu = document.querySelector(".menu-card1");
    obentu.style.display="none";
    var plat=document.querySelector(".menu-card2");
    plat.style.display="none";
    

}


function menuo(){
    var salad =document.querySelector(".menu-card");
    salad.style.display="none";
    var obentu = document.querySelector(".menu-card1");
    obentu.style.display="flex";
    var plat=document.querySelector(".menu-card2");
    plat.style.display="none";
    

}
function menup(){
    var salad =document.querySelector(".menu-card");
    salad.style.display="none";
    var obentu = document.querySelector(".menu-card1");
    obentu.style.display="none";
    var plat=document.querySelector(".menu-card2");
    plat.style.display="flex";
    

}
// TOTAL







