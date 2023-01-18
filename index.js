const notas = [2,22,33,40];
const nomes = ['Gabriel', 'Joao', 'Maria', 'Pedro'];
notas.forEach(function (nome) {
    console.log(nome);
});

const reprovados = nomes.filter((_, indice) => {
  return notas[indice] < 7;
});



const sala1 = [10,10,10,10];
const sala2 = [5,5,5,10];
const sala3 = [9,6,7,6.5];

function calculaMedia(notasSala) {
    const somaNota = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = somaNota / notasSala.length;
    return media;
 
}


//objeto

const cliente = {
    nome: ["Gabriel", "Pereira"],
    idade: 24,
    cpf: "057.623.783-30",
    email: "gabrielgomes@ma.def.br"
};

console.log(cliente.nome);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})

cliente.endereco = {
    rua:"R. blait",
    numero: 24,
    apartamento: false,
};

  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  });
  
  const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );
  
  console.log(listaApenasApartamentos);
/*
git remote add origin
git add .
git status
git commit -m
*/