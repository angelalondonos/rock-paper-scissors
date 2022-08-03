//juego de piedra, papel y tijera donde el usuario ingresa una opción y la máquina responde para ver si coinciden o no

let player=0;
let pc=0;
let wins=0;
let losses=0;

/* Create number randon for pc */
function numberRandom(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min);
}

function play(){

    while(wins < 3 && losses<3){
        player = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
        pc = numberRandom(1,3);
        if(player == 1 && pc == 3 || player == 2 && pc == 1 || player == 3 && pc == 2){
            console.log("Ganaste!!");
            wins =wins +1; 
        }else  if(player == pc){
            console.log("Empate!!");
        }else {
            console.log("Perdiste");
            losses = losses +1;
        }
    }
    console.log("Wins: " + wins + "   Losses: " + losses);
}