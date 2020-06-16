const express = require('express'); 

//importação do expressa dentro de uma váriavel chamada express
const { response, query } = require('express');

//declaração de uma váriavel app que é igual express
const app = express(); 

//usamos para o express interpretar o formato json, sempre usar antes das rotas
app.use(express.json());

//primeiro parametro que o método get recebe é qual endereço que queremos observar(/nomeprojeto) e o segundo uma função que tem dois parametros (primeiro requisição() e o segundo resposta(request))
app.get('/projects', (request, response) =>{

    //permite retornar dados seguindo a estrutura de Json, json sempre deve retornar um array ou um objeto
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
}); 

app.post('/projects', (request, response) => {

    const {title, owner} = request.body

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

//put usamos identificado (id) para saber qual será atualizado
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    
    console.log(id);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 4',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 4',

    ]);
});

//porta que vou utilizar para ver a aplicação
app.listen(3333, () => {
    console.log('🗄 Back-end started!');
}); 


