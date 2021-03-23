//fonction Background Aléatoire
changeBg()
function changeBg(){

    const images = [
        'url("./assets/img/beach.jpg")',
        'url("./assets/img/cliffMountains.jpg")',
        'url("./assets/img/forest.jpg")',
        'url("./assets/img/landscape.jpg")',
        'url("./assets/img/morocco.jpg")',
        'url("./assets/img/morocco2.jpg")',
        'url("./assets/img/space1.jpg")',
        'url("./assets/img/space2.jpg")',
        'url("./assets/img/space3.jpg")',
        'url("./assets/img/space4.jpg")',
        'url("./assets/img/space6.jpg")',
        'url("./assets/img/space7.jpg")',
        'url("./assets/img/space8.jpg")',
    ]
    const body = document.querySelector('body');
    const bg = images[Math.floor(Math.random() * images.length)];

    body.style.backgroundImage = bg;
    body.style.backgroundSize = "cover"
    body.style.backgroundRepeat = "no-repeat"
}
setInterval(changeBg, 15000)

const main = document.querySelector('main');
const heure_container = document.querySelector('section')

//============================ CONST JOURS MOIS ===========================//
const date = new Date()
console.log(date);
let weekday = [ 'Sunday', 'Monday', 'Tuesday', 
'Wednesday', 'Thuesday', 'Friday', 'Saturday' ];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//============================ DATE CONTAINER ======================//
const date_today = document.createElement('div');
date_today.id = "date_today";
main.appendChild(date_today);
//===================== DATE ==================//
const date_aujourdhui = document.createElement('div');
date_aujourdhui.className = 'date'
date_aujourdhui.textContent = weekday[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
date_today.appendChild(date_aujourdhui);
//===================== HEURE  ==================//
const heure = document.createElement('div');
heure.id = 'heure';
heure.textContent = date.toLocaleTimeString('fr-FR');
heure_container.appendChild(heure);

//======================== Ajout de l'heure Dynamique ====================//
function UR_Start()
{
UR_Nu = new Date();
UR_Indhold = showFilled(UR_Nu.getHours())+ ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
document.all.heure.innerHTML = UR_Indhold;
//document.writeln(UR_Indhold);
setTimeout("UR_Start()",1000);
}
function showFilled(Value)
{
return (Value > 9) ? "" + Value : "0" + Value;
} 