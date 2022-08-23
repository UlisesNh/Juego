


var piedra = "Piedra"
var tijera = "Tijera"
var papel = "Papel"

var resultado = function elige (jugador1, jugador2){
    if (jugador1==piedra && jugador2==tijera){
        console.log("Jugador 1 ha ganado")
    }

    else if (jugador1==piedra && jugador2==papel){
        console.log("Jugador 2 ha ganando")
    }
    else if (jugador1==piedra && jugador2==piedra){
        console.log("Empate")
    }

    else if (jugador1==tijera && jugador2==piedra){
        console.log("Jugador 2 ha ganado")
    }
    else if (jugador1==tijera && jugador2==papel){
        console.log("jugador 1 ha ganado")
    }

    else if (jugador1==tijera && jugador2==tijera){
        console.log("Empate")
    }

    else if (jugador1==papel && jugador2==piedra){
        console.log("Jugador 1 ha ganado")
    }
    else if (jugador1==papel && jugador2==tijera){
        console.log("Jugador 2 ha ganado")

    }
    else if (jugador1==papel && jugador2==papel){
        console.log("Empate")
    }

}