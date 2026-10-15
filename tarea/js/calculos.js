// Arrow function con rest operator (...notas)
export const promedio = (...notas) => {
  const suma = notas.reduce((acc, nota) => acc + nota, 0);
  return suma / notas.length;
};

// Parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Desestructuración y Spread operator (...notas)
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} ${estado(prom)}`;
};

export default reporte;
