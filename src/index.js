const express = require('express'); 

//cria um id unico e universal
const {uuid} = require('uuidv4');

//importação do expressa dentro de uma váriavel chamada express
const { response, query, request } = require('express');

//declaração de uma váriavel app que é igual express
const app = express(); 

//usamos para o express interpretar o formato json, sempre usar antes das rotas
app.use(express.json());

const projects = [];


//primeiro parametro que o método get recebe é qual endereço que queremos observar(/nomeprojeto) e o segundo uma função que tem dois parametros (primeiro requisição() e o segundo resposta(request))
app.get('/projects', (request, response) =>{

    //permite retornar dados seguindo a estrutura de Json, json sempre deve retornar um array ou um objeto
    const { title } = request.query;

    const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

   // console.log(title);
   // console.log(owner);

    return response.json(results);
}); 

app.post('/projects', (request, response) => {

    const {title, owner} = request.body

    const project = {id: uuid(), title, owner};

    projects.push(project);

    return response.json(project);
});

//put usamos identificado (id) para saber qual será atualizado
app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const {title, owner} = request.body;
    
    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(400).json({error: 'Project not found.'})

    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex < 0){
        return response.status(204).json({error: 'Error'});
    }

    projects.splice(projectIndex, 1);

    return response.send();
});

//porta que vou utilizar para ver a aplicação
app.listen(3333, () => {
    console.log('🗄 Back-end started!');
}); 


