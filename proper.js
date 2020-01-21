window.onload = function() {
  var cuestionario = new Object;
    var pregunta1 = {
      titulo : "Cantidad de alumnos",
      opciones: [5, 15, 10],
      respuesta: 1
    };
    var pregunta2 = {
      titulo : "Cantidad de profes",
      opciones: [1, 47, 2],
      respuesta: 2
    };
    var pregunta3 = {
      titulo : "Cantidad de computradoras",
      opciones: [20, 25, 15],
      respuesta: 1
    };

cuestionario.preguntas = [pregunta1, pregunta2, pregunta3];

cuestionario.preguntas.forEach(element => {
  var titulo = this.document.createElement ("h1");
  titulo.innerHTML = element.titulo;
  document.body.append(titulo);
  var form = this.document.createElement("form");
  element.opciones.forEach(respuesta =>{
    var label = this.document.createElement("label");
    var input = this.document.createElement("input");
    input.setAttributte("type", "radio");
    input.setAttributte("value", respuesta);
    input.setAttributte("name", element.titulo);
    label.append(respuesta);
    label.appendChild(input);
    form.append(label);
  });
  document.body.append(form);
});
var btn = this.document.createElement("button");
btn.innerHTML = "Validar";
btn.onclick = function() {
  var formularios = document.forms;
  var respuesta1 = Array.from(formularios[0].elements).filter(x => x.checked == true);
  var respuesta2 = Array.from(formularios[1].elements).filter(x => x.checked == true);
  var respuesta3 = Array.from(formularios[2].elements).filter(x => x.checked == true);
  var respuestasCorrectas = 0;

  if(cuestionario.preguntas[0].respuesta == respuesta1[0].value) {
    alert("Respuesta Correcta");
    respuestasCorrectas ++;
  } else {
    alert("Seguí intentando");
  }
  if(cuestionario.preguntas[1].respuesta == respuesta2[0].value) {
    alert("Respuesta Correcta");
    respuestasCorrectas ++;
  } else {
    alert("Seguí intentando");
  }
  if(cuestionario.preguntas[2].respuesta == respuesta3[0].value) {
    alert("Respuesta Correcta");
    respuestasCorrectas ++;
  } else {
    alert("Seguí intentando");
  }
  if(respuestasCorrectas == 3) {
    alert("Ganaste");
  };
};
};
