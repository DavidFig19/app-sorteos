var participantes=[{nombre:""}];

var item;
function Addplayer(){

    //guardo en una variable el valor de el input
    var persona=document.getElementById("texbox").value;


    //agrego el valor del input a un
    // persona = persona.replace(/(\r\n\t|\n|\r\t)/gm,"");

    var persona=persona.split("\n");
    participantes.push(persona);
    console.log(participantes);

    

      
    
        var ul = document.getElementById("list");
        var li = document.createElement("li");
      
        participantes.forEach(element => {
            li.appendChild(document.createTextNode(element.nombre));
            li.setAttribute("id", "list"); // added line
            ul.appendChild(li);
           
            
        });
       
  
     
 
  
    // alert(li.id);



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