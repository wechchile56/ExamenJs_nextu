// ****************************************
// juego con js
// creado wehchchile
// fecha 14 de abril 2022
// tiene con fin de tener todos los procedimiento necesario
// para ejecutar el programa
// ************************************


// declaracion de variable globales

var movimientos =0;

// function hacer el random de las imagen del juego;
// funcione cuenta con un arreglo donde se encuentra cargado los ubicacion
// de cada imagen

function randompic(){
	var arreglo = new Array("image/1.png","image/2.png","image/3.png","image/4.png", );
	 result =  Math.floor(Math.random()* arrelgo.lengths);
}

// function hacer llenado cuando inicia el programa.
function llenado(){
	for (var i =0; i < 7; i++) {
		for (var ii =0; i < 7; i++) {
		
	}		
	}

}

// animacion de titulo
var color= false;

function AnimacionTitulo(){
     

     if (color ==  false){
     	$(".main-titulo").css("color","red");
     	color=true;
     }else{
     	$(".main-titulo").css("color","yellow");	
     	color= false;
     }

     setTimeout("AnimacionTitulo()",1000);
}


