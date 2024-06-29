const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day=new Date();
var cdcontainer=document.getElementById("cd");
cdcontainer.innerText = days[day.getDay()];


const dailyevent=["Sweet Night", "Karoke", "Game Night", "Mafia Night", "Famous Guest Singer"]