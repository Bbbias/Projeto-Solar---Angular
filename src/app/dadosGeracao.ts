export class dadosGeracao {
    unidade: String;
    data: String;
    totalKW: Number;
    id: Number

constructor(id: Number, unidade: String, data: String, totalKW: Number){

  this.id = id;
  this.unidade = unidade;
  this.data = data;
  this.totalKW = totalKW;
}
}