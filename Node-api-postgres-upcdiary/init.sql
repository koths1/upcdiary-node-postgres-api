create table Usuario(
idUsuario serial,
email varchar(50) UNIQUE,
senha varchar(20),
nome varchar(50),
CPF varchar(15) UNIQUE,
tipo varchar(50),
primary key(idUsuario)
);

create table Estudo(
idEstudo serial,
nomeEstudo varchar(30),
descricaoEstudo varchar(100),
estado varchar(7),
primary key(idEstudo)
);

create table Medicamento(
idMedicamento serial,
idEstudo int,
nomeMedicamento varchar(30),
descricaoMedicamento varchar(100),
ingestaMedicamento varchar(100),
dosagemMedicamento varchar(30),
primary key(idMedicamento),
foreign key(idEstudo) references Estudo(idEstudo)
);

create table Consulta(
idConsulta serial,
idPesquisador int,
idPaciente int,
dia date,
hora varchar(5),
lugar varchar(30),
estado varchar(15),
primary key(idConsulta),
foreign key(idPesquisador) references Usuario(idUsuario),
foreign key(idPaciente) references Usuario(idUsuario)
);

create table notificacao(
idNotificacao serial,
mensagem varchar(50),
estado varchar(10),
primary key(idNotificacao)
);

create table MedicamentoPaciente(
idMedPac serial,
idEstudo int,
idPaciente int,
idMedicamento int,
primary key(idMedPac),
foreign key(idEstudo) references Estudo(idEstudo),
foreign key(idPaciente) references Usuario(idUsuario),
foreign key(idMedicamento) references Medicamento(idMedicamento)
);

create table Ingesta(
idIngesta serial,
idPaciente int,
idMedicamento int,
dia date,
ingeriu varchar(1),
primary key(idIngesta),
foreign key(idPaciente) references Usuario(idUsuario),
foreign key(idMedicamento) references Medicamento(idMedicamento)
); 

insert into usuario(email, senha, nome, CPF, tipo) values ('paciente@hotmail.com', '123', 'paciente', '123', 'Paciente');
insert into usuario(email, senha, nome, CPF, tipo) values ('pesquisador.com', '123', 'pesquisador', '321', 'Pesquisador');
insert into usuario(email, senha, nome, CPF, tipo) values ('administrador@hotmail.com', '123', 'administrador', '213', 'Administrador');