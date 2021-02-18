







var parrafo;
var numero;
var contenido;
var cont;
var contenedor;
var contener;
 var participantes=[];//array para la tabla
var sonido=new Audio();
var sonido.src="../assets/sonido.mp3"; //variable que hace el sonido del clik
var item;

//funcion para el sonido del clik
function SonidoFinal()
{
    sonido.pause();
    sonido.currentTime=0;
    sonido.play();
			
}	
function CreateTable(arraypersonas){
    console.log("miaarraty "+arraypersonas)
    arraypersonas.forEach((item)=>{
          parrafo = document.createElement("div");
          numero = document.createElement("div");
       
         parrafo.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);
         numero.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);
 
         // Crear nodo de tipo Text
          contenido = document.createTextNode(item);
          cont=document.createTextNode(arraypersonas.indexOf(item));
         // Añadir el nodo Text como hijo del nodo tipo Element
         parrafo.appendChild(contenido);
         numero.appendChild(cont);
         // Añadir el nodo Element como hijo de la pagina
          contenedor = document.getElementById("container");
         contenedor.appendChild(parrafo);
          contener=document.getElementById("container");
         contener.appendChild(numero);


         
    })
    

}
// function CreateTable(Arrayparticipantes){

//     participantes.forEach((item)=>{
//          // Crear nodo de tipo Element
//          var parrafo = document.createElement("div");
//          var numero = document.createElement("div");
 
//          parrafo.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);
//          numero.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);
 
//          // Crear nodo de tipo Text
//          var contenido = document.createTextNode(item);
//          var cont=document.createTextNode(participantes.indexOf(item));
//          // Añadir el nodo Text como hijo del nodo tipo Element
//          parrafo.appendChild(contenido);
//          numero.appendChild(cont);
//          // Añadir el nodo Element como hijo de la pagina
//          var contenedor = document.getElementById("container");
//          contenedor.appendChild(parrafo);
//          var contener=document.getElementById("container");
//          contener.appendChild(numero);
 
//     })

// }
function Addplayer(){

   
	

 
    // guardo en una variable el valor de el input
    var persona=document.getElementById("texbox").value;


    // // agrego el valor del input a un
    // persona = persona.replace(/(\r\n\t|\n|\r\t)/gm,"");

    var persona=persona.split("\n");
   
   
    persona.forEach((item)=>{
        
        participantes.push(item);//aqui agregamos un nuevo item a el array por cada item de persona
    
        console.log(participantes);//imprimo el array en consola
       
        SonidoFinal();//ejecutamos la funcion del sonido al final
   
    
    });
       

  
      CreateTable(participantes)
    
   
}
function Deleteplayer(){

   var eliminado= participantes.shift()
    alert("elimine "+ eliminado)
   
    
    CreateTable(participantes)
    
 
}


