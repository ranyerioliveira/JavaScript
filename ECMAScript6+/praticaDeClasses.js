class Pessoa{
    constructor(){
      this.nome = '',
      this.sobrenome = ''
    }
    nomePessoa(primeironome){
      this.nome = primeironome;
      console.log('Meu nome é:' + this.nome);
    }
    segundoNome(segundonome){
      this.sobrenome = segundonome;
      console.log('Meu sobrenome é:'+ this.sobrenome);
    }
    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobrenome;
        console.log(nomeCompleto);

    }
  };
  
  let pessoa1 = new Pessoa();
  
  pessoa1.nomePessoa('Ranyeri');
  pessoa1.segundoNome('Cunha');
  pessoa1.nomeCompleto();
  