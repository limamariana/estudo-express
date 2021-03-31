const { response, request } = require("express");
const express = require("express");
const { uuid } = require("uuidv4");
const app = express();

app.use(express.json());

const projects = [];

/** métodos http
 * Get: buscar infos do back
 * post: criar info no back
 * put/patch:  alterar uma informação no back
 * delete: deletar infos no back
 */
/** parâmetros
 * query Params : usado principalmente para filtros e paginação
 * Route params: identificar os recursos na hora de atualizar ou deletar;
 * request body: resto do conteúdo na hora de criar ou editar um recurso
 * 
 * 
 */

//console.log(app);

app.get("/projects", (request, response) => {
   // const {title, owner} = request.query;

        //console.log(title);
        //console.log(owner);
    
    
    return response.json(projects);
        //"Projeto 1",
       // "Projeto 2",
        //"Projeto 100"
    //])
});

app.post("/projects", (request, response) => {
    const {title, owner} = request.body;

  const project = { id: uuid(), title, owner};

  projects.push(project); // esse push vai colocar a criação do projeto no array
    
    
    return response.json(project); // sempre retornar o projeto recém criado e nunca exibir a lista completa
        //"Projeto 1",
        //"Projeto 2",
       // "Projeto 3",
        //"Projeto 4",
        //"Projeto 5"
    //])
});

app.put("/projects/:id", (request, response) => {
    const params = request.params;
    console.log(params)
    return response.json ([
        "Projeto 50",
        "Projeto 2",
        "Projeto 3",
        "Projeto 4",
        "Projeto 5"
    ])

});

app.delete("/projects/:id", (request, response) => {
    return response.json([
        "Projeto 50",
        "Projeto 2"
    ])
})

app.listen(3000) //, () => {
    //console.log("Servidor rodando!")
//}); 