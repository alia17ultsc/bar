const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day=new Date();
var cdcontainer=document.getElementById("cd");
cdcontainer.innerText = days[day.getDay()];


const dailyevent=["Sweet Night", "Karoke", "Game Night", "Mafia Night", "Famous Guest Singer", "Disco Night", "Date Night"]

var todayEvent=document.getElementById("todayevent");
todayEvent.innerText = dailyevent[day.getDay()];


const sn="All guests get a free dessert";
const karoke="Come sing and have fun";
const gn="Games: Chess, Uno, cards, bingo";
const mn="Tune into the mystery of Mafia";
const fgs="Live performance of singer";
const dn="Dance till you drop";
const daten="Meet your dream person";


var infolist=[sn, karoke, gn, mn, fgs, dn, daten];
var info=document.getElementById("info");
info.innerText=infolist[day.getDay()];

const imgsn="../decorations/dessertsun.png";
const imgkaroke="../decorations/stagemon.png";
const imggn="../decorations/gametue.png";
const imgmn="../decorations/mafiawed.png";
const imgfgs="../decorations/singerthu.png";
const imgdn="../decorations/dancefri.png";
const imgdaten="../decorations/datesat.png";

var imglist=[imgsn, imgkaroke, imggn, imgmn, imgfgs, imgdn, imgdaten];
var img=document.getElementById("eventimg");
img.src=imglist[day.getDay()];

window.onload = ()=>{
    img.classList.add("addopacity");
};
function changeday(daynumber){
    
    
    img.classList.remove("addopacity");
    img.classList.add("removeopacity");
    cdcontainer.classList.remove("addopacity");
    cdcontainer.classList.add("removeopacity");
    todayEvent.classList.remove("addopacity");
    todayEvent.classList.add("removeopacity");
    info.classList.remove("addopacity");
    info.classList.add("removeopacity");
    
    setTimeout(()=>{
        img.src=imglist[daynumber];
        cdcontainer.innerText = days[daynumber];
    todayEvent.innerText = dailyevent[daynumber];
    info.innerText=infolist[daynumber];
        img.classList.remove("removeopacity");
        img.classList.add("addopacity");
        cdcontainer.classList.remove("removeopacity");
    cdcontainer.classList.add("addopacity");
    todayEvent.classList.remove("removeopacity");
    todayEvent.classList.add("addopacity");
    info.classList.remove("removeopacity");
    info.classList.add("addopacity");
    }, 500);
}

