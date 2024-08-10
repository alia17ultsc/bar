window.scrollTo({top: 0, behavior: 'smooth'});

showdrink(1);


function showdrink(drinktype){
   var menuitems=document.getElementsByClassName("menuitem");
    for (var i=0; i<menuitems.length; i++){
        menuitems[i].style.backgroundColor="white";
        menuitems[i].style.color="black";
        menuitems[i].style.fontWeight="normal";
    }
    
    var alldrinks=document.getElementsByClassName("drink");
    for (var i=0; i<alldrinks.length; i++){
        alldrinks[i].style.display="none";
    }
    var type="";
    if (drinktype==1){
        type="coffee";
    }
    else if(drinktype==2){
        type = "tea";
    }
    else if(drinktype==3){
        type = "alchoholic"
    }
    else if(drinktype==4){
        type = "non-alchoholic";
    }
    else if(drinktype==5){
        type = "soft-drink";
    }
    else if(drinktype==6){
        type = "juices";
    }
    else if(drinktype==7){
        type = "shots"
    }
    showspecificdrink(type);  
}

function showspecificdrink(type){
     var drinks=document.getElementsByClassName(type);
        for (var i=0; i<drinks.length; i++){
        drinks[i].style.display="flex";
        }
    var menuitem=document.getElementById(type);
    menuitem.style.backgroundColor="gold";
    menuitem.style.color="darkred";
    menuitem.style.fontWeight="bold";
}


