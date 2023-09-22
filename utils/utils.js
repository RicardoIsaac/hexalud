export function generarMatriz6x6() {
    const letras = ["A", "T", "C", "G"];
    const matriz = [];
  
    for (let i = 0; i < 6; i++) {
      const fila = [];
      for (let j = 0; j < 6; j++) {
        const letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
        fila.push(letraAleatoria);
      }
      matriz.push(fila.join(""));
    }
  
    return matriz;
  }
