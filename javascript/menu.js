showdrink(1);


function showdrink(drinktype){
    console.log("fgfgdgdf");
    var alldrinks=document.getElementsByClassName("drink");
    for (var i=0; i<alldrinks.length; i++){
        alldrinks[i].style.display="none";
    }
    var type="";
    if (drinktype==1){
        type="coffee";
    }
    else if(drinktype==4){
        type = "non-alchoholic";
    }
    else if(drinktype==5){
        type = "soft-drink";
    }
    
    showspecificdrink(type);  
}

function showspecificdrink(type){
     var drinks=document.getElementsByClassName(type);
        for (var i=0; i<drinks.length; i++){
        drinks[i].style.display="flex";
        }
}