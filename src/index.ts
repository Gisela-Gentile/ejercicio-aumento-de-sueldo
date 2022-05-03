import "./styles.css";

let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su sueldo actual";

btnEnviar.addEventListener("click", () => {
  let datoIngresado: number = Number(dato.value);
  let aumento: number;
  if (datoIngresado > 0 && datoIngresado <= 15000) {
    aumento = datoIngresado + datoIngresado * 0.2;
    console.log(
      "Usted tiene un aumento del 20%, su sueldo con aumento es $" + aumento
    );
    document.write(
      "Usted tiene un aumento del 20%, su sueldo con aumento es $" + aumento
    );
  } else if (datoIngresado > 15000 && datoIngresado <= 20000) {
    aumento = datoIngresado + datoIngresado * 0.1;
    console.log(
      "Usted tiene un aumento del 10%, su sueldo con aumento es $" + aumento
    );
    document.write(
      "Usted tiene un aumento del 10%, su sueldo con aumento es $" + aumento
    );
  } else if (datoIngresado > 20000 && datoIngresado <= 25000) {
    aumento = datoIngresado + datoIngresado * 0.05;
    console.log(
      "Usted tiene un aumento del 5%, su sueldo con aumento es $" + aumento
    );
    document.write(
      "Usted tiene un aumento del 5%, su sueldo con aumento es $" + aumento
    );
  } else {
    console.log("Usted no tiene un aumento, su sueldo es $" + datoIngresado);
    document.write("Usted no tiene un aumento, su sueldo es $" + datoIngresado);
  }
});
