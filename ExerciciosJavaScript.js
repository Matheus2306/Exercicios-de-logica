import {
  bubbleSort,
  letrasCompactadas,
  sanitizadorDeTexto,
  sanitizadorNumero,
} from "./utils/AuxiliaresJavascript.js";

/*==============================================================
________________________EXERCICIO 01____________________________
1. descobrir o segundo maior número em um array
==============================================================*/
function secondLargest(numbers = []) {
  if (numbers != Number) {
    return console.log("Informe um array somente de números");
  }

  //1º for de sanitização das duplicatas
  let arraylimpo = sanitizadorNumero(numbers);

  //2º for de ordenação do array por buble sort
  let arrayOrdenado = bubbleSort(arraylimpo);

  // busca o segundo maior
  let segundo = arrayOrdenado[arrayOrdenado.length - 2];
  return segundo;
}

/*==============================================================
________________________EXERCICIO 02____________________________
2. compacta uma string de várias letras iguais usando um 
contador exemplo: aaassssrrr resulta em 3a4s3r
==============================================================*/

function compactarString(text = "") {
  let stringCompactada = "";
  let textoLimpo = sanitizadorDeTexto(text);
  const listaDeLetrasCompactadas = letrasCompactadas(textoLimpo);

  listaDeLetrasCompactadas.map((item) => {
    stringCompactada = stringCompactada + item.count + item.letra;
  });

  return stringCompactada;
}

/*==============================================================
________________________EXERCICIO 03____________________________
3. realiza as contas de quantas notas o caixa deve devolver 
usando o valor que ele inserir
==============================================================*/

function caixa(ValorSaque = 0) {
  let notasDevolvidas = [];
  let valorRestante = ValorSaque;
  switch (valorRestante > 0) {
    case valorRestante >= 100:
      let notasDe100 = (valorRestante / 100).toFixed(0);
      notasDevolvidas.push({ nota: "100", qtde: notasDe100 });
      valorRestante = valorRestante - notasDe100 * 100;

    case valorRestante >= 50:
      let notasDe50 = (valorRestante / 50).toFixed(0);
      notasDevolvidas.push({ nota: "50", qtde: notasDe50 });
      valorRestante = valorRestante - notasDe50 * 50;

    case valorRestante >= 20:
      let notasDe20 = (valorRestante / 20).toFixed(0);
      notasDevolvidas.push({ nota: "20", qtde: notasDe20 });
      valorRestante = valorRestante - notasDe20 * 20;

    case valorRestante >= 10:
      let notasDe10 = (valorRestante / 10).toFixed(0);
      notasDevolvidas.push({ nota: "10", qtde: notasDe10 });
      valorRestante = valorRestante - notasDe10 * 10;

    case valorRestante >= 5:
      let notasDe5 = (valorRestante / 5).toFixed(0);
      notasDevolvidas.push({ nota: "5", qtde: notasDe5 });
      valorRestante = valorRestante - notasDe5 * 5;

    case valorRestante >= 2:
      let notasDe2 = (valorRestante / 2).toFixed(0);
      notasDevolvidas.push({ nota: "2", qtde: notasDe2 });
      valorRestante = valorRestante - notasDe2 * 2;

    case valorRestante != 0:
      console.log(
        `Sobrou R$${valorRestante.toFixed(2)}, valor impossivel de saque`,
      );
  }
  return console.table(notasDevolvidas);
}

/*==============================================================
________________________EXERCICIO 04____________________________
4. Agrupa pessoas usando a idade em menores de idade, maiores e 
idosos
==============================================================*/

function agruparIdade(Pessoas = [{ nome: "", idade: "" }]) {
  const resultado = Pessoas.reduce(
    (acc, atual) => {
      atual.idade < 18 && atual.idade > 0 && acc.menores.push(atual.nome);
      atual.idade > 18 && atual.idade < 60 && acc.adultos.push(atual.nome);
      atual.idade >= 60 && acc.idosos.push(atual.nome);
      return acc;
    },
    { menores: [], adultos: [], idosos: [] },
  );
  return console.table(resultado);
  // const agrupadas = { menores: [], adultos: [], idosos: [] };
  // Pessoas.forEach((item) => {
  //   if (item.idade < 18) {
  //     agrupadas.menores.push(item.nome);
  //   }
  //   if (item.idade > 18 && item.idade < 60) {
  //     agrupadas.adultos.push(item.nome);
  //   }
  //   if (item.idade > 59) {
  //     agrupadas.idosos.push(item.nome);
  //   }
  // });
  // return console.table(agrupadas)
}
