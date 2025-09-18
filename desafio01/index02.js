class Lanche {
    constructor() {
      this.pao = false;
      this.carne = false;
      this.queijo = false;
      this.salada = false;
      this.molho = false;
    }
  
    show() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  class LancheBuilder {
    constructor() {
      this.lanche = new Lanche();
    }
  
    addPao() {
      this.lanche.pao = true;
      return this;
    }
  
    addCarne() {
      this.lanche.carne = true;
      return this;
    }
  
    addQueijo() {
      this.lanche.queijo = true;
      return this;
    }
  
    addSalada() {
      this.lanche.salada = true;
      return this;
    }
  
    addMolho() {
      this.lanche.molho = true;
      return this;
    }
  
    build() {
      return this.lanche;
    }
  }
  
  const lancheSimples = new LancheBuilder()
    .addPao()
    .addCarne()
    .build();
  
  const lancheCompleto = new LancheBuilder()
    .addPao()
    .addCarne()
    .addQueijo()
    .addSalada()
    .addMolho()
    .build();
  
  lancheSimples.show();
  lancheCompleto.show();
  
