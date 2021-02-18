//declaramos un array para los participantes
var participantes = [];

var sonido = new Audio();
sonido.src = "../assets/sonido.mp3"; //variable que hace el sonido del clik
//funcion para el sonido del clik
function SonidoFinal() {
  sonido.pause();
  sonido.currentTime = 0;
  sonido.play();
}

function Addplayer() {

  const moonLanding = new Date();
const ID= moonLanding.getTime()+moonLanding.getMilliseconds()
console.log(ID);
  

  // guardo en una variable el valor de el input
  var persona = document.getElementById("persona").value;
  console.log(persona);

  // var personas = persona.split("\n");
  var personas;
  personas=({nombre:persona.split("\n"),id:ID})
  console.log(personas)

  // //para que se inserte individualmente los item seprarlos pro un foreach
  // personas.forEach((item)=>{
        
  //   // participantes.push(item);//aqui agregamos un nuevo item a el array por cada item de persona

  //   // // console.log(participantes);//imprimo el array en consola
   
  //   // SonidoFinal();//ejecutamos la funcion del sonido al final

  //   participantes.push({nombre:item,id:})
  //   console.log(participantes);


  // });
   


  // CreateTable(participantes)

}

function CreateTable(array){
  
  console.log("mi array"+array)
  //selecionamos la tabla
  const CuerpoTabla=document.querySelector("#CuerpoTabla")
 
  array.forEach(element => {
  
  console.log(element)
  const tr=document.createElement('tr');
  //constante para crear un elemento de la tabla
  const tdNombre=document.createElement('td');
  //cosntante para el elemento de su index
  const tdNumero=document.createElement('td');
  //asignamos el valor de el array a la celda
    tdNombre.textContent=element;
  //asignamos un valor con el index a la columna numero del participante
  tdNumero.textContent=array.indexOf(element);
  console.log(tdNumero)
  //insertamos el nombre al tr
  tr.appendChild(tdNombre);
  //insertamos el numero al tr
  tr.appendChild(tdNumero);
  //insertamos el tr al cuerpo de la tabla
  CuerpoTabla.appendChild(tr);

  });


}
const boton_agregar = document.getElementById("agregar");
console.log(boton_agregar);

boton_agregar.addEventListener("click", () => Addplayer(), true);
