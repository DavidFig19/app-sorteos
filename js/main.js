//declaramos un array para los participantes
var participantes = [];

var sonido = new Audio();
sonido.src = "../assets/mouse.mp3"; //variable que hace el sonido del clik
//funcion para el sonido del clik
function Click() {
  sonido.pause();
  sonido.currentTime = 0;
  sonido.play();
}

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
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );

    //   const moonLanding = new Date();
    // const ID= moonLanding.getTime()+moonLanding.getMilliseconds()
    // console.log(ID)
    participantes.push({
      nombre: item,
      id: uuid,
    });

    console.log(participantes);
  });
  Click();
  CreateTable(participantes);
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
    tr.setAttribute("id", element.id);
    //insertamos el nombre al tr
    tr.appendChild(tdNombre);
    //insertamos el numero al tr
    tr.appendChild(tdNumero);
    //insertamos el tr al cuerpo de la tabla
    CuerpoTabla.appendChild(tr);
  });
}

function DeletePlayer() {
  if (participantes.length == 0) {
    alertify.error("Tabla vacia");
  }

  //primer paso definimos el maximo del random
  //en base a la exension de el arreglo
  var maximo = participantes.length;
  console.log("maximo" + maximo);
  //creamos una constante random en base al maximo y minimo
  const elejido = Math.floor(Math.random() * (maximo - 0));

  //mensaje del ganador
  alertify
    .alert()
    .setting({
      title: "Felicidades!!",
      label: "entendido",
      message: `Ganador: ${participantes[elejido].nombre}`,
      // 'onok': function(){ alertify.success(`felicidades ${participantes[elejido].nombre}`);}
    })
    .show();

  //eliminamos de la tabla dependiendo de el id del participante elejido
  var CuerpoTabla = document.querySelector("#CuerpoTabla");
  var eliminarhtml = document.getElementById(`${participantes[elejido].id}`);
  var hijoeliminado = CuerpoTabla.removeChild(eliminarhtml);

  // alertify.success(`Ganador: ${participantes[elejido].nombre}`)

  // console.log("hijo eliminado: "+hijoeliminado);
  // console.log("el elejido es "+elejido);
  // alert("eliminado"+ participantes[elejido].nombre);
  // console.log(maximo);

  //eliminamos del arreglo el participante elejido
  participantes.splice(elejido, 1);
}
const boton_agregar = document.getElementById("agregar");
console.log(boton_agregar);

boton_agregar.addEventListener("click", () => Addplayer(), true);

//boton para sortear
const boton_sortear = document.getElementById("sortear");
console.log(boton_sortear);

boton_sortear.addEventListener("click", () => DeletePlayer(), true);
