import {
  // StatusTarefa,
  type Venda,
  // type entradaAtualizarStatus,
  type ProdutoCarrinho,
  type ResumoCarrinho,
  type RankingItem,
  // type Tarefa,
} from "./Interfaces/Interfaces.ts";

/*==============================================================
________________________EXERCICIO 01____________________________
1. Função de calcular carrinho usando uma interface, ignora 
quantidae incorretas (valores abaixo de 1) 
==============================================================*/
function CalcularCarrinho(Produtos: ProdutoCarrinho[]) {
  var totalItens = 0;
  var valorTotalCarrinho = 0;
  const result = Produtos.reduce<ResumoCarrinho>(
    (acc, atual) => {
      if (atual.quantidade > 0) {
        totalItens = acc.quantidadeItens + atual.quantidade;
        valorTotalCarrinho =
          acc.valorTotalCarrinho + atual.preco * atual.quantidade;
      } else {
        console.log(
          `Item ${atual.nome} possui quantidade ${atual.quantidade}, logo foi ignorado`,
        );
      }
      return {
        quantidadeItens: totalItens,
        valorTotalCarrinho: valorTotalCarrinho,
      };
    },
    { quantidadeItens: 0, valorTotalCarrinho: 0 },
  );
  console.table(result);
}

/*==============================================================
________________________EXERCICIO 02____________________________
2. Função de manipulação de array de status de tarefa
==============================================================*/
// function AlterarStatus(tarefas: Tarefa[], input: entradaAtualizarStatus) {
//   var tarefasData: Tarefa[] = [];
//   for (let i = 0; i < tarefas.length; i++) {
//     tarefasData.push(tarefas[i]);
//   }

//   console.table(tarefas);

//   try {
//     const tarefa = tarefasData.find((item) => item.id === input.id);
//     if (!tarefa) return console.log("Id inválido");

//     if (tarefa.status == StatusTarefa.concluida)
//       return console.log(
//         "Não é possivel fazer uma alteração em uma tarefa já concluida",
//       );

//     const novaLista = tarefasData.map((item) =>
//       item.id === input.id ? { ...item, status: input.novoStatus } : item,
//     );

//     novaLista.map(
//       (item) =>
//         item.id === input.id &&
//         console.log(
//           "tarefa atualizada com sucesso: ",
//           item.titulo,
//           item.status,
//         ),
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

/*==============================================================
________________________EXERCICIO 03____________________________
3.Ranking de vendedores, Colocar em um ranking dos 3 melhores 
vendedores
==============================================================*/
function Ranking(vendas: Venda[]): RankingItem[] {
  const agrupado = vendas.reduce<Record<string, number>>(
    (acc, { vendedor, valorVenda }) => {
      acc[vendedor] = (acc[vendedor] || 0) + valorVenda;
      return acc;
    },
    {},
  );
  return Object.entries(agrupado)
    .map(([vendedor, total]) => ({ vendedor, total }))
    .sort((a, b) => b.total - a.total);
}

