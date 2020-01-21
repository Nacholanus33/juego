window.onload = function() {
  var cuestionario = new Object;
    var pregunta1 = {
      titulo : "Cantidad de alumnos",
      opciones: [5, 15, 10],
      correcta: 2
    };
    var pregunta2 = {
      titulo : "Cantidad de profes",
      opciones: [1, 47, 2],
      correcta: 3
    };
    var pregunta3 = {
      titulo : "Cantidad de computradoras",
      opciones: [20, 25, 15],
      correcta: 2
    };

cuestionario.preguntas = [pregunta1, pregunta2, pregunta3];

cuestionario.preguntas.forEach(element => {
  var titulo = this.document.createElement ("h1");
  titulo.innerHTML = element.titulo;
  document.body.append(titulo);
  var form = this.document.createElement("form");
  element.opciones.forEach(correcta =>{
    var label = this.document.createElement("label");
    var input = this.document.createElement("input");
    input.setAttributte("type", "radio");
    input.setAttributte("value", correcta);
    input.setAttributte("name", element.titulo);
    label.append(correcta);
    label.appendChild(input);
    form.append(label);
  });
  document.body.append(form);
});
