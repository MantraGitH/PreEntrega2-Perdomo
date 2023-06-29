console.log("Conectado");

// Objeto con las recomendaciones de ropa según la temperatura
const recomendaciones = {
  alta: "Hace mucho calor. Te recomendamos usar ropa ligera, como camisetas y pantalones o shorts cortos.",
  media: "El clima está joya. Puedes usar camisetas de manga corta.",
  baja: "Fresco como lechuga. Te recomendamos usar un canguro o campera ligera.",
  muyBaja: "Está más frío que el corazón de tu ex. Es mejor que uses ropa abrigada, como un buzo o campera."
};

// Array con nombres de ciudades
const nombresCiudades = ["Montevideo", "Colonia del Sacramento", "Minas", "Piriapolis", "Rocha"];
let ciudadesDisponibles = [...nombresCiudades];

// Función para obtener una recomendación de ropa según la temperatura
function obtenerRecomendacion(temperatura) {
  if (temperatura >= 30) {
    return recomendaciones.alta;
  } else if (temperatura >= 20 && temperatura < 30) {
    return recomendaciones.media;
  } else if (temperatura >= 10 && temperatura < 20) {
    return recomendaciones.baja;
  } else {
    return recomendaciones.muyBaja;
  }
}

// Simulador que interactúa con el usuario para obtener la temperatura actual y la duración en días de la simulación.
// Utiliza funciones, arrays y un ciclo "while" para simular cambios de temperatura y mostrar la recomendación de ropa para cada día.
function simularClima() {
  let temperatura;
  let duracionEnDias;
  let temperaturaValida = false;

  function validarTemperatura(valor) {
    return !isNaN(valor) && valor >= -273;
  }

  do {
    temperatura = prompt("Ingresa la temperatura actual:");
    temperatura = parseFloat(temperatura); // Convertir a decimal
    if (validarTemperatura(temperatura)) {
      temperaturaValida = true;
    } else {
      alert("Temperatura inválida. Ingresa un número mayor o igual a -273 porfavor.");
    }
  } while (!temperaturaValida);

  function validarDuracion(valor) {
    return !isNaN(valor) && valor > 0;
  }

  do {
    duracionEnDias = prompt("Ingresa la duración en días de la simulación porfavor:");
    duracionEnDias = parseInt(duracionEnDias); // Convertir a num. entero
    if (validarDuracion(duracionEnDias)) {
      break;
    } else {
      alert("Duración inválida. Ingresa un número entero mayor que cero porfavor.");
    }
  } while (true);

  let iteracion = 1;
  const registrosClima = [];

  while (iteracion <= duracionEnDias) {
    let ciudad;
    if (ciudadesDisponibles.length === 0) {
      ciudadesDisponibles = [...nombresCiudades]; // Restaurar ciudades disponibles
      ciudad = ciudadesDisponibles.shift(); // Extraer y eliminar primera ciudad del array
    } else {
      ciudad = ciudadesDisponibles.shift(); // Extraer y eliminar primera ciudad del array
    }

    const registro = {
      dia: iteracion,
      ciudad: ciudad,
      temperatura: temperatura,
      recomendacion: obtenerRecomendacion(temperatura)
    };
    registrosClima.push(registro);

    temperatura += Math.floor(Math.random() * 5) - 2; // Simulación de cambio de temperatura
    iteracion++;
  }

  console.log("Registros del clima:");
  console.log(registrosClima);
}

// Ejecutar el simulador.
simularClima();