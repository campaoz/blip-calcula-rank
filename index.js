// Função que calcula o nível do herói
function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return {
    saldoVitorias,
    nivel
  };
}

// Simulação de partidas (uso de laço de repetição)
let vitorias = 0;
let derrotas = 0;

for (let i = 1; i <= 20; i++) {
  vitorias++;
}

for (let i = 1; i <= 5; i++) {
  derrotas++;
}

// Chamada da função
const resultado = calcularNivel(vitorias, derrotas);

// Saída final
console.log(
  `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);
