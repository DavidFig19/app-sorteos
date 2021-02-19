
//declaramos un array para los participantes
var participantes = [];



var sonido = new Audio();
sonido.src = "../assets/sonido.mp3"; //variable que hace el sonido del clik
//funcion para el sonido del clik
function Click() {
  sonido.pause();
  sonido.currentTime = 0;
  sonido.play();
}



//vamos a validar cuando no hay nadie en la tabla
function Validacion(){
 

  if(participantes.length===0){
   

    console.log("validado")

    const CuerpoTabla = document.querySelector("#CuerpoTabla");
    const aviso=document.createElement("h2");
    aviso.textContent="Aun no hay participantes";
    aviso.className="text-center"
    aviso.setAttribute("id","aviso")
    CuerpoTabla.appendChild(aviso)


  }else{
    if(participantes.length>1){
      var borrar=document.querySelector("#CuerpoTabla").removeChild(aviso);
      console.log(borrar)
  
    }
  }
 

  

  
}

Validacion();



function Addplayer() {

  // guardo en una variable el valor de el input
  var persona = document.getElementById("persona").value;
  console.log(persona);

  var personas = persona.split("\n");
  console.log("personas" + personas);
  /// agrego el valor del input a un
  // persona = persona.replace(/(\r\n\t|\n|\r\t)/gm,"");
  //para que se inserte individualmente los item seprarlos pro un foreach

  personas.forEach((item) => {

    const moonLanding = new Date();
  const ID= moonLanding.getTime()+moonLanding.getMilliseconds()
  console.log(ID)
    participantes.push({
      
      nombre: item,
      id: ID
    });
   
    console.log(participantes);
  });

  CreateTable(participantes)
}

function CreateTable(array) {
  console.log("mi array" + array);
  //selecionamos la tabla
  const CuerpoTabla = document.querySelector("#CuerpoTabla");

  array.forEach((element) => {
    console.log(element);
    const tr = document.createElement("tr");
    //constante para crear un elemento de la tabla
    const tdNombre = document.createElement("td");
    //cosntante para el elemento de su index
    const tdNumero = document.createElement("td");
    //asignamos el valor de el array a la celda
    tdNombre.textContent = element.nombre;
   
    //asignamos un valor con el id a la columna numero del participante
    tdNumero.textContent = element.id;
    //agregamosid
    tr.setAttribute("id",element.id)
    //insertamos el nombre al tr
    tr.appendChild(tdNombre);
    //insertamos el numero al tr
    tr.appendChild(tdNumero);
    //insertamos el tr al cuerpo de la tabla
    CuerpoTabla.appendChild(tr);
  });
}



function DeletePlayer(){
  //primer paso definimos el maximo del random
  //en base a la exension de el arreglo
  var maximo=participantes.length;
  console.log("maximo"+maximo)
  //creamos una constante random en base al maximo y minimo
  const elejido= Math.floor(Math.random() * (maximo-0));
  //eliminamos de la tabla dependiendo de el id del participante elejido
  var CuerpoTabla = document.querySelector("#CuerpoTabla");
  var eliminarhtml=document.getElementById(`${participantes[elejido].id}`);
  var hijoeliminado=CuerpoTabla.removeChild(eliminarhtml);


  // console.log("hijo eliminado: "+hijoeliminado);
  // console.log("el elejido es "+elejido);
  // alert("eliminado"+ participantes[elejido].nombre);
  // console.log(maximo);

  //eliminamos del arreglo el participante elejido
  participantes.splice(elejido,1)

  
 
}
const boton_agregar = document.getElementById("agregar");
console.log(boton_agregar);

boton_agregar.addEventListener("click", () => Addplayer(), true);

//boton para sortear
const boton_sortear=document.getElementById("sortear");
console.log(boton_sortear);


boton_sortear.addEventListener('click',()=>DeletePlayer(),true);