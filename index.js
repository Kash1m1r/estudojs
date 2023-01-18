const notas = [2,22,33,40];
const nomes = ['Gabriel', 'Joao', 'Maria', 'Pedro'];
notas.forEach(function (nome) {
    console.log(nome);
});

notas.forEach((nome) => {
    console.log(nome);
});

function teste (nome){
    console.log(nome);
}

notas.forEach(teste);

const reprovados = nomes.filter((_, indice) => {
  return notas[indice] < 7;
});

console.log(reprovados);

const sala1 = [10,10,10,10];
const sala2 = [5,5,5,10];
const sala3 = [9,6,7,6.5];

function calculaMedia(notasSala) {
    const somaNota = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = somaNota / notasSala.length;
    return media;
    console.log(notasSala);
}

console.log(calculaMedia(sala1))
console.log(calculaMedia(sala2))
console.log(calculaMedia(sala3))

//objeto

const cliente = {
    nome: "Gabriel",
    idade: 24,
    cpf: "057.623.783-30",
    email: "gabrielgomes@ma.def.br"
};

console.log(cliente);

/*
git remote add origin
git add .
git status
git commit -m
*/