// Arrow function con rest operator
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// Parametro por defecto
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuracion
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} ${estado(prom)}`;
};

export default reporte;
