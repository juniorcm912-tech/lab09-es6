import estudiantesIniciales, { curso } from "./datos.js";
import reporteGenerar from "./calculos.js";

// Spread de objeto y de arreglo
const nuevoEstudiante = { ...estudiantesIniciales[0], nombre: "Ana María" };
const todosLosEstudiantes = [...estudiantesIniciales, nuevoEstudiante];

// Mostrar en consola
console.log(`Curso: ${curso}`);
todosLosEstudiantes.forEach((estudiante) => {
  console.log(reporteGenerar(estudiante));
});

// Mostrar en la página (DOM)
document.querySelector("#nombre-curso").textContent = curso;
const listaUl = document.querySelector("#reportes");

todosLosEstudiantes.forEach((estudiante) => {
  const li = document.createElement("li");
  li.textContent = reporteGenerar(estudiante);
  listaUl.appendChild(li);
});
