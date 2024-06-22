window.addEventListener('scroll', e=>{document.body.style.cssText=`--scrollTop:${gety()}px`})
 


function gety(){
    if(this.scrollY>220){
        return 220;
    }
    else{
        return this.scrollY;
    }
}

function clickup(){
    document.documentElement.scrollTop=0;
}