


//Ciclo de día y noche

let tiempo = 0;
function cicloTiempo(){
    
    switch(tiempo) {

        case 0:
            document.getElementById("momento").innerHTML = "Noche";
            document.getElementById("all").className = "night";
            tiempo = tiempo + 16000;
            
            break;
    
        case 16000:
            document.getElementById("momento").innerHTML = "Dia";
            tiempo = tiempo - 16000;
            document.getElementById("all").className = "day";
            break;
        }
}

setInterval(cicloTiempo, 9000 );


//ciclo del agua
    //variables
let lluvia = 0;
let primavera = 25;
const lluviaMusica = new Audio('Assets/lluvia_music.mp3')

    //funciones
    primaveraProbability();

function soleado(){
    document.getElementById("clima").innerHTML = "Despejado";
    document.getElementById("nubes").className = "nubesNormal";
    lluviaMusica.pause(20001);
    lluvia = lluvia - 16000;
}

function cicloAgua(){
    
    while( lluvia == 0 ){
            document.getElementById("clima").innerHTML = "Lloviendo";
            document.getElementById("nubes").className = "nubesOver";
            lluvia = lluvia + 16000;
            lluviaMusica.play();
            setTimeout(soleado, 7000);
        }
}


function primaveraProbability(){
    if(Math.floor((Math.random()*100)+1) < primavera){
        cicloAgua();
    }
}

setInterval(primaveraProbability, 3000);
