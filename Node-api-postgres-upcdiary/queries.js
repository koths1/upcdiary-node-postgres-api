//GET
const { pool } = require('./config')

const getUsers = (request, response) =>{
    pool.query('SELECT * FROM usuario ORDER BY idUsuario ASC', (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getUserById = (request, response) =>{

    const idUsuario = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM usuario WHERE idUsuario = $1', [idUsuario], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getPesquisadores = (request, response) =>{
    pool.query('SELECT * FROM usuario WHERE tipo = $1 ', ["Pesquisador"], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getPacientes = (request, response) =>{
    pool.query('SELECT * FROM usuario WHERE tipo = $1', ["Paciente"], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getEstudos = (request, response) =>{
    pool.query('SELECT * FROM estudo', (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getEstudosById = (request, response) =>{

    const idEstudo = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM estudo WHERE idEstudo = $1', [idEstudo], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getMedicamentos = (request, response) =>{
    pool.query('SELECT * FROM medicamento', (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getMedicamentosById = (request, response) =>{

    const idMedicamento = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM medicamento WHERE idMedicamento = $1', [idMedicamento], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getConsultas = (request, response) =>{
    pool.query('SELECT * FROM consulta', (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getConsultasById = (request, response) =>{

    const idConsulta = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM consulta WHERE idConsulta = $1', [idConsulta], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getConsultasPaciente = (request, response) =>{

    const idPaciente = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM consulta WHERE idPaciente = $1', [idPaciente], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getMedicamentosPaciente = (request, response) =>{

    const idPaciente = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM MedicamentosPaciente WHERE idPaciente = $1', [idPaciente], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getIngesta = (request, response) =>{
    pool.query('SELECT * FROM ingesta', (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getMedicamentosIngeridos = (request, response) =>{

    let diaData = new Date();
    let dia = diaData.getDate();

    pool.query('SELECT * FROM ingesta WHERE ingeriu = $1 and dia=$2', ["S",dia], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getIngestaMedicamento = (request, response) =>{

    const idMedicamento = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM ingesta WHERE idMedicamento = $1', [idMedicamento], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getIngestaPaciente = (request, response) =>{

    const idPaciente = parseInt(request.params.id)//parseInt(request.get.params.id) NÃO TEM O GET

    pool.query('SELECT * FROM ingesta WHERE idPaciente = $1', [idPaciente], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(200).json(results.rows);
    })
}

//POST

const criarPaciente = (request, response) =>{

    const { email, senha, nome, CPF} = request.body

    pool.query('INSERT INTO usuario ( email, senha, nome, CPF, tipo) VALUES ($1, $2, $3, $4, $5)', [ email, senha, nome, CPF, "Paciente"], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Usuario Paciente adicionado com ID: ${result.insertId}');
    })
}

const criarPesquisador = (request, response) =>{

    const { email, senha, nome, CPF} = request.body

    pool.query('INSERT INTO usuario ( email, senha, nome, CPF, tipo) VALUES ($1, $2, $3, $4, $5)', [ email, senha, nome, CPF, "Pesquisador"], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Usuario Pesquisador adicionado com ID: ${result.insertId}');
    })
}

const criarMedicamento = (request, response) =>{

    const { nomeMedicamento, descricaoMedicamento, ingestaMedicamento, dosagemMedicamento} = request.body

    pool.query('INSERT INTO medicamento ( nomeMedicamento, descricaoMedicamento, ingestaMedicamento, dosagemMedicamento) VALUES ($1, $2, $3, $4)', [ nomeMedicamento, descricaoMedicamento, ingestaMedicamento, dosagemMedicamento, "Funcionario", 0], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Medicamento adicionado com ID: ${result.insertId}');
    })
}

const criarEstudo = (request, response) =>{

    const { nomeEstudo, descricaoEstudo} = request.body

    pool.query('INSERT INTO estudo ( nomeEstudo, descricaoEstudo, estado) VALUES ($1, $2, $3)', [ nomeEstudo, descricaoEstudo, "ativo"], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Estudo adicionado com ID: ${result.insertId}');
    })
}

const criarConsulta = (request, response) =>{

    const {idPesquisador, idPaciente, dia, hora, local, estado} = request.body

    pool.query('INSERT INTO consulta (idPesquisador, idPaciente, dia, hora, lugar, estado) VALUES ($1, $2, $3, $4, $5, $6)', [ idPesquisador, idPaciente, dia, hora, local, estado], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Consulta solicitada com ID: ${result.insertId}');
    })
}

const criarMedicamentosPaciente = (request, response) =>{

    const { idEstudo, idPaciente, idMedicamento } = request.body

    pool.query('INSERT INTO medicamentopaciente ( idEstudo, idPaciente, idMedicamento) VALUES ($1, $2, $3)', [ idEstudo, idPaciente, idMedicamento], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Usuario adicionado ao estudo com sucesso');
    })
}

const criarIngesta = (request, response) =>{

    const { idPaciente, idMedicamento, dia, ingeriu } = request.body

    pool.query('INSERT INTO ingesta ( idPaciente, idMedicamento, dia, ingeriu) VALUES ($1, $2, $3, $4)', [ idPaciente, idMedicamento, dia, ingeriu ], (error, results) =>{ 
        if(error) {
            throw error
        }
        response.status(201).send('Ingesta adicionada com ID: ${result.insertId}');
    })
}

//PUT começar daqui

const atualizaUsuario = (request, response) => {
    const idUsuario = parseInt(request.params.idAgendamento)
    const { email, senha, nome, CPF } = request.body

    pool.query(
        'UPDATE usuario SET email=$1, senha=$2, nome=$3, CPF=$4 WHERE idusuario=$5', [ email, senha, nome, CPF, idUsuario],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Usuario atualizado com sucesso.')
       }
    )
}

const deletaUsuario = (request, response) => {
    const idUsuario = parseInt(request.params.idAgendamento)

    pool.query(
        'UPDATE usuario SET senha=$1 WHERE idUsuario=$2', [ "NoAccessPatient", idUsuario ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Acesso de usuário removido com sucesso')
       }
    )
}

const atualizaEstudo = (request, response) => {
    const idEstudo = parseInt(request.params.id)
    const { nomeEstudo, descricaoEstudo } = request.body

    pool.query(
        'UPDATE estudo SET nomeEstudo = $1, descricaoEstudo = $2 WHERE idEstudo = $3', [ nomeEstudo, descricaoEstudo, idEstudo],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Estudo atualizado com sucesso')
       }
    )
}

const editarMedicamento = (request, response) => {
    const idMedicamento = parseInt(request.params.id)
    const { nomeMedicamento, descricaoMedicamento, ingestaMedicamento, dosagemMedicamento } = request.body

    pool.query(
        'UPDATE medicamento SET nomeMedicamento = $1, descricaoMedicamento = $2, ingestaMedicamento = $3, dosagemMedicamento = $4 WHERE idMedicamento = $5', [ nomeMedicamento, descricaoMedicamento, ingestaMedicamento, dosagemMedicamento, idMedicamento ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Medicamento editado com sucesso')
       }
    )
}

const editarConsulta = (request, response) => {
    const idConsulta = parseInt(request.params.id)
    const { dia, hora, lugar, estado } = request.body

    pool.query(
        'UPDATE consulta SET dia = $1, hora = $2, lugar = $3, estado = $4 WHERE idConsulta = $5', [ dia, hora, lugar, estado, idMedicamento ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Consulta editada com sucesso')
       }
    )
}

const editarMedicamentoPaciente = (request, response) => {
    const idMedPac = parseInt(request.params.id)
    const { idEstudo, idPaciente, idMedicamento } = request.body    

    pool.query(
        'UPDATE MedicamentoPaciente set idEstudo = $1, idPaciente = $2, idMedicamento = $3 WHERE idMedPac = $1', [ idEstudo, idPaciente, idMedicamento, idMedPac ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Relação alterada com sucesso')
       }
    )
}

const editarIngesta = (request, response) => {
    const idIngesta = parseInt(request.params.id)    
    const{ idMedicamento, idPaciente, dia, ingeriu } = request.body
    
    pool.query(
        'UPDATE ingesta SET idMedicamento = $1, idPaciente = $2, dia = $3, ingeriu = $4 WHERE idIngesta = $5', [ idMedicamento, idPaciente, dia, ingeriu,idIngesta ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Ingesta alterada com sucesso')
       }
    )
}

//DELETE começa aqui

const deletaEstudo = (request, response) => {
    const idEstudo = parseInt(request.params.id)

    pool.query(
        'UPDATE estudo SET status = $1 WHERE idEstudo = $2', [ "Inativo", idEstudo ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Estudo definido como inativo.')
       }
    )
}

const deletaMedicamento = (request, response) => {
    const idMedicamento = parseInt(request.params.id)

    pool.query(
        'DELETE medicamento WHERE idMedicamento = $1', [ idMedicamento ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Medicamento deletado com sucesso')
       }
    )
}

const deletaConsulta = (request, response) => {
    const idConsulta = parseInt(request.params.id)    

    pool.query(
        'DELETE consulta WHERE idConsulta = $1', [ idConsulta ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Consulta deletada com sucesso')
       }
    )
}

const deletaMedicamentoPaciente = (request, response) => {
    const idMedPac = parseInt(request.params.id)    

    pool.query(
        'DELETE MedicamentoPaciente WHERE idMedPac = $1', [ idMedPac ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Relação removida com sucesso')
       }
    )
}

const deletaIngesta = (request, response) => {
    const idIngesta = parseInt(request.params.id)    

    pool.query(
        'DELETE ingesta WHERE idIngesta = $1', [ idIngesta ],
        (error, results) => {
            if(error){
            throw error
        }
        response.status(200).send('Ingesta removida com sucesso')
       }
    )
}

module.exports = {
    getUsers,//GET
    getUserById,
    getPesquisadores,
    getPacientes,
    getEstudos,
    getEstudosById,
    getMedicamentos,
    getMedicamentosById,
    getConsultas,
    getConsultasById,
    getConsultasPaciente,
    getMedicamentosPaciente,
    getIngesta,
    getMedicamentosIngeridos,
    getIngestaMedicamento,
    getIngestaPaciente,
    criarPaciente,//POST
    criarPesquisador,
    criarMedicamento,
    criarEstudo,
    criarConsulta,
    criarMedicamentosPaciente,
    criarIngesta,
    atualizaUsuario,//PUT
    deletaUsuario,
    atualizaEstudo,
    editarMedicamento,
    editarConsulta,
    editarMedicamentoPaciente,
    editarIngesta,
    deletaEstudo,//DELETE
    deletaMedicamento,
    deletaConsulta,
    deletaMedicamentoPaciente,
    deletaIngesta
    
}