export class RecordsListModel {
   public id: string = "";
   public nome: string = "";
   public descricao: string = "";
   public dataCriacao: Date = new Date();
   public usuarioCriador: string = "";
   public statusRegistro: string = "";
   public dataUltimaModificacao: Date = new Date();
   public quantidadeItens: number = 0;
   public valorTotal: number = 0;
   public categoria: string = "";
   public isAtivo: boolean = true;
}
