drop database if exist iss;
create database iss charset = UTF8 collate utf8_general_ci;
use iss;

create table servicos (
    id_servico integer not null primary key auto_increment,
    prestador VARCHAR(250) not null,
    valor_hora decimal(9,2) not null,
    horas_trabalhadas decimal(5,2) not null
)

insert into servicos VALUES
(1, "Joao Mendonca", 35.00, 75.00);
(2, "Marina Silva", 24.00, 100.00);
(3, "Junior Junqueira", 16.50, 125.0);