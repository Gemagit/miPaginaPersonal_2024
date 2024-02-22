document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); //PARALIZA EL EVENTO CUANDO EL USUARIO PULSA SUBMIT

  const name = event.target.name.value;
  const lname = event.target.lname.value;
  const email = event.target.email.value;
  const message = event.target.message.value;


  let msj = "";

  if (name.length < 3 || name.length > 20) {
    msj += "Nombre fuera de tamaño: 3-20 \n";
  }


  if (lname.length < 3 || lname.length > 30) {
    msj += "Apellido fuera de tamaño: 3-30 \n";
  }

  if (message.length < 5 || message.length > 50) {
    msj += "Texto fuera de tamaño: 5-50 \n";
  }

  if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    msj += "Error validación: " + email + "\n";
  }


  // Comprobar si hay errores
  if (msj.length != 0) {
    alert(msj); //imprime mensaje final de error
    //document.body.innerHTML += msj;
    let p = document.createElement("pre");
    let mensaje = document.createTextNode(msj);
    p.style.color = "yellow";
    p.style.fontSize = "16px";
    p.appendChild(mensaje);

    document.getElementById("form").appendChild(p); // dibuja resultado
  }
  else {
    //Enviar formulario
    //document.querySelector("form").submit();
    alert("Formulario enviado con éxito");
    event.target.submit();//YA SE PUEDE ENVIAR
  }
});

