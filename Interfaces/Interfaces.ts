export type {
  ProdutoCarrinho,
  ResumoCarrinho,
  RankingItem,
  /*Tarefa, entradaAtualizarStatus,*/ Venda,
};

/*==============================================================
________________________EXERCICIO 01____________________________
==============================================================*/

interface ProdutoCarrinho {
  nome: string;
  preco: number;
  quantidade: number;
}

interface ResumoCarrinho {
  quantidadeItens: number;
  valorTotalCarrinho: number;
}

/*==============================================================
________________________EXERCICIO 02____________________________
==============================================================*/

// export enum StatusTarefa {
//   pendente = 1,
//   emAndamento = 2,
//   concluida = 3,
// }
// interface Tarefa {
//   id: number;
//   titulo: string;
//   status: StatusTarefa;
// }

// interface entradaAtualizarStatus {
//   id: number;
//   novoStatus: StatusTarefa;
// }

/*==============================================================
________________________EXERCICIO 03____________________________
==============================================================*/

interface Venda {
  vendedor: string;
  valorVenda: number;
}
interface RankingItem {
  vendedor: string;
  total: number;
}
