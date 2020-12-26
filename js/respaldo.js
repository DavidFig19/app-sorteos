var participantes=[];//array para la tabla
var sonido=new Audio();
sonido.src="../assets/sonido.mp3"; //variable que hace el sonido del clik
var item;

//funcion para el sonido del clik
function SonidoFinal()
{
    sonido.pause();
    sonido.currentTime=0;
    sonido.play();
			
}		
function Addplayer(){

   
	

 
    // guardo en una variable el valor de el input
    var persona=document.getElementById("texbox").value;


    // // agrego el valor del input a un
    // persona = persona.replace(/(\r\n\t|\n|\r\t)/gm,"");

    var persona=persona.split("\n");
   
   
    persona.forEach((item)=>{
        
        participantes.push(item);//aqui agregamos un nuevo item a el array por cada item de persona
    
        console.log(participantes);//imprimo el array en consola
        // Crear nodo de tipo Element
        var parrafo = document.createElement("div");
        var numero = document.createElement("div");

        parrafo.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);
        numero.style.backgroundColor="#" + ((1 << 24) * Math.random() | 0).toString(16);

        // Crear nodo de tipo Text
        var contenido = document.createTextNode(item);
        var cont=document.createTextNode(participantes.indexOf(item));
        // Añadir el nodo Text como hijo del nodo tipo Element
        parrafo.appendChild(contenido);
        numero.appendChild(cont);
        // Añadir el nodo Element como hijo de la pagina
        var contenedor = document.getElementById("container");
        contenedor.appendChild(parrafo);
        var contener=document.getElementById("container");
        contener.appendChild(numero);

        SonidoFinal();//ejecutamos la funcion del sonido al final
   
    
    })
       

  
      
    
    //     var ul = document.getElementById("list");
    //     var li = document.createElement("li");
      
    //         li.appendChild(document.createTextNode(persona));
    //         li.setAttribute("id", "list"); // added line
    //         ul.appendChild(li);
           
    //     var ul = document.getElementById("list");
    //     var li = document.createElement("li");
      
    //         li.appendChild(document.createTextNode(persona));
    //         li.setAttribute("id", "list"); // added line
    //         ul.appendChild(li);
           
            
      
       
  
     
 
  
    // alert(li.id);



}
function Deleteplayer(){

    participantes.shift()
    alert("elimine"+ participantes.shift())
    SonidoFinal();
}


// function Sortear(){
//     var Indice=participantes.length();

//     var Random=Math.floor(Math.random()*Indice)+1;
//     console.log(Random);
//     participantes.map((item)=>{

//         item
//     })




// }


// function Addplayer(){

//     var persona=document.getElementById("texbox").value;


//     participantes.push(persona);
//     console.log(participantes);

//     participantes.forEach(participante => {
//         // participante
//         console.log(participante)
//          // Inserta una fila en la tabla, en el índice 0
//      // Obtiene una referencia a la tabla
//      var tableRef = document.getElementById("tablaPersona");

//     var newRow   = tableRef.insertRow(0);

//     // Inserta una celda en la fila, en el índice 0
//     var newCell  = newRow.insertCell(0);
//     // Añade un nodo de texto a la celda
//     var newText  = document.createTextNode(participante);
//     newCell.appendChild(newText);
//     console.log(newText)

//     });




// }