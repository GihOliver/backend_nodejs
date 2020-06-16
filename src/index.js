const express = require('express'); //importação do expressa dentro de uma váriavel chamada express

const app = express(); //declaração de uma váriavel app que é igual express

//primeiro parametro que o método get recebe é qual endereço que queremos observar(/nomeprojeto) e o segundo uma função que tem dois parametros (primeiro requisição() e o segundo resposta(request))
app.get('/', (request, response) =>{
    //permite retornar dados seguindo a estrutura de Json, json sempre deve retornar um array ou um objeto
    return response.json({messsage:'Hello Word'});
}); 
//porta que vou utilizar para ver a aplicação
app.listen(3333, () => {
    console.log('🗄Back-end started!');
}); 


