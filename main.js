//juego de piedra, papel y tijera donde el usuario ingresa una opción y la máquina responde para ver si coinciden o no

let player;
let pc = numberRandom(1,3);

function numberRandom(min,max){
    return Math.floor(Math.random()* (max - min + 1)+min);
}

function play(player){
    if(player == 1 && pc == 3){
        console.log("Ganaste!!")
    }else if(player == 2 && pc == 1){
        console.log("Ganaste!!")
    }else  if(player == 3 && pc == 2){
        console.log("Ganaste!!")
    }else  if(player == pc){
        console.log("Empate!!")
    }else {
        console.log("Sigue intentando")
    }
}
