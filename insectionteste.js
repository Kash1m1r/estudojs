const livros = require("./livros");

function listaLivros(lista) {
    for(atual = 0; atual < lista.length; atual++){
        let analisar = atual;
        while(analisar > 0 && lista[analisar].preco > lista[analisar + 1].preco){
            let itemAnalisar = lista[analisar]; 
            let itemFrente = lista[analisar + 1]    ;

            lista[analisar] = itemFrente;
            lista[analisar + 1] = itemAnalisar;

            analisar++;
        }
    }
    console.log(lista);
}

listaLivros(livros);