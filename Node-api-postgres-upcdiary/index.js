const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const { pool } = require('./config')
const db = require('./queries')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

/*const getBooks = (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addBook = (request, response) => {
  const { author, title } = request.body

  pool.query('INSERT INTO books (author, title) VALUES ($1, $2)', [author, title], error => {
    if (error) {
      throw error
    }
    response.status(201).json({ status: 'success', message: 'Book added.' })
  })
}*/

app
  /*.route('/usuarios')
  // GET endpoint
  .get(getBooks)
  // POST endpoint
  .post(addBook)*/
  .get('/usuarios', db.getUsers)  //Trás todos os usuários.
  .get('/usuarios/:id', db.getUserById) //Pega dados de um usuário por ID.
  .get('/pesquisadores', db.getPesquisadores)  //Trás todos os usuários.
  .get('/pacientes', db.getPacientes)  //Trás todos os usuários.
  .get('/estudos', db.getEstudos) //Puxa todos os estudos.
  .get('/estudos/:id', db.getEstudosById)  //Puxa um estudo por id.
  .get('/medicamentos', db.getMedicamentos) //Puxa todos os medicamentos.
  .get('/medicamentos/:id', db.getMedicamentosById) //Trás um medicamento por id.
  .get('/consultas', db.getConsultas) //Puxa todas as consultas.
  .get('/consultas/:id', db.getConsultasById) //Puxa uma consulta por ID.
  .get('/consultasPaciente/:id', db.getConsultasPaciente)  //Trás todas as consultas do paciente.
  .get('/medicamentosPaciente/:id', db.getMedicamentosPaciente) //Trás todos os medicamentos de um paciente por id.
  .get('/ingesta', db.getIngesta) //Trás todos os dados de ingesta.
  .get('/medicamentosIngeridos', db.getMedicamentosIngeridos)  //Trás todos os medicamentos ingeridos hj.
  .get('/ingestaMedicamento/:id', db.getIngestaMedicamento) //Trás os dados de ingesta de um medicamento por id. =>FUTURE
  .get('/ingestaPaciente/:id', db.getIngestaPaciente) //Trás os dados de ingesta de um paciente por id. =>FUTURE
  .post('/addPaciente', db.criarPaciente)  //Cadastrar um paciente no sistema.
  .post('/addPesquisador', db.criarPesquisador)  //Cadastrar um pesquisador no sistema.
  .post('/addMedicamento', db.criarMedicamento)  //Cadastrar um medicamento no sistema.
  .post('/addEstudo', db.criarEstudo)  //Cadastrar um estudo no sistema.
  .post('/addConsulta', db.criarConsulta) //Utilizado para preenchimento do formulario de pesquisa.
  .post('/medicamentosPaciente', db.criarMedicamentosPaciente) //Faz a relação de um paciente com um medicamento e um estudo.
  .post('/addIngesta', db.criarIngesta) //Insere dados sobre ingesta no sistema.
  .put('/usuarios/:id', db.atualizaUsuario) //Editar usuário por id.
  .put('/deleteUsuario/:id', db.deletaUsuario)  //Remove o acesso do usuario por id.
  .put('/estudos/:id', db.atualizaEstudo) //Editar um estudo.  
  .put('/deletarEstudos/:id', db.deletaEstudo) //Alterar status de um estudo para inativo.  
  .put('/medicamento/id:', db.editarMedicamento) //Editar um medicamento por id.
  .put('/deletarMedicamento/id:', db.deletaMedicamento) //Deletar um medicamento por id.
  .put('/consultas/id:', db.editarConsulta) //Editar uma consulta por id. 
  .put('/deletarConsultas/id:', db.deletaConsulta) //Deletar uma consulta por id. 
  .put('/medicamentoPaciente/:id', db.editarMedicamentoPaciente) //Editar o relacionamento paciente-medicamento-estudo
  .put('/deletarMedicamentoPaciente/:id', db.deletaMedicamentoPaciente) //Desassociar paciente do estudo
  .put('/ingesta/:id', db.editarIngesta) //Editar uma ingesta por id.   
  .put('/deletarIngesta/:id', db.deletaIngesta) //Editar uma ingesta por id, alterando status de ingerido de S para N.   


// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})