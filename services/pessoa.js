const fs = require('fs');

function getPessoas () {
    //  - Armazenamos e convertemos o 'pessoas.json' para JavaScript Value, mais especificamente um Array de Objetos.
    return JSON.parse(fs.readFileSync('pessoas.json'))
}

function getPessoaPorId (id) {
    //  - Armazenamos e convertemos o 'pessoas.json' para JavaScript Value, mais especificamente um Array de Objetos.
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))
    //  - Faz busca dentro da agora lista de objetos que, baseado no parâmetro (id)
    //  irá retornar uma lista de objetos(que na verdade sempre será composta por apenas um único item),
    //  mesmo assim, passamos o valor de index [0], para garantirmos que o valor retornado seja do primeiro objeto da lista.
    const pessoasFilter = pessoas.filter( pessoa => pessoa.id === id )[0]
    //  - Por fim, retornamos a variável pessoaFilter criada anteriormente, que terá armazenada nela.
    return pessoasFilter
}

function postPessoa (novaPessoa) {
    //  - Armazenamos e convertemos o 'pessoas.json' para JavaScript Value, mais especificamente um Array de Objetos.
    const pessoas = JSON.parse(fs.readFileSync('pessoas.json'))
    //  - Utilizamos de Spread para adicionarmos o novo objeto dentro do Array de Objetos.
    const pessoasAtualizada = [...pessoas, novaPessoa]
    //  - Por fim fazemos o processo inverso a primeira linha da função, transformando JavaScript Value em JavaScript Object Notation.
    fs.writeFileSync('pessoas.json', JSON.stringify(pessoasAtualizada))
}

function patchPessoas (patcher, id) {

    /*
    
        - Transformamos o conteúdo do JSON em Objeto.
        - Como são vários objetos, este por sua vez, se torna uma lista destes.
    
    */
      let pessoas = JSON.parse(fs.readFileSync('pessoas.json'))
    
    /*  
    
        - Utilizando do findIndex quero capturar o primeiro Objeto(pessoa) que possua o valor "id" (pessoa.id)
        parecido com o id parametrizado nesta função(patchPessoas(patcher, id)), com isso agora, separamos o objeto
        que queremos modificar, o armazenando dentro dessa variável.
    
    */  
    const patchIndex = pessoas.findIndex(pessoa => pessoa.id === id)

    /*  

        - Utiliza de Spread para separar o Objeto específico [baseado em seu Index].
        - Aplica patcher, que nada mais é que a alteração (parâmetro primário desta função).
        - Com isso entenda que, patcher irá trazer consigo a propriedade { "nome" : "conteúdo" }
        que por sua vez com outro Spread irá pegar o objeto específico dentro da lista e substituirá pelo 
        seu novo conteúdo
   
    */ 
    const patchedContent = { ... pessoas [ patchIndex ], ... patcher }

    /* 

        - Pegamos a variável Pessoa (Lista de Objetos)
        - Com base no Id do Objeto [pacthIndex]
        - Substituímos de seu conteúdo pelo da variável (patchedContent).
    
    */
    pessoas[patchIndex] = patchedContent
    
    /*  
    
        - Por fim finalizamos a função transformando a variável pessoas (JavaScript Value)
        em JSON (JavaScript Object Notation) 
    
    */
    fs.writeFileSync('pessoas.json', JSON.stringify(pessoas))

}

module.exports = {
    getPessoas,
    getPessoaPorId,
    postPessoa,
    patchPessoas,
}