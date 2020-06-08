## :rocket: Sobre o projeto

Criar um sistema para simular juros de uma compra parcelada utilizando a tecnologias `React` e `ASP.NET CORE`:

## :clipboard: Iniciando a aplicação (React)

1. Clone o repositório com `https://github.com/Samuel-Rodrigues/parcelamento-juros-PG`
2. Na pasta `simulacaojurosREACT` Instale todas as dependencias com o comando `yarn` ou `NPM i`

## :clipboard: Iniciando a API (ASP.NET Core)

1. Gerar o banco de dados(SQL Server) com a entidade necessária.
 ````
USE master;
GO

CREATE DATABASE simulacaojuros;
GO
USE simulacaojuros
CREATE TABLE Simulacao (
    id int IDENTITY(1,1) PRIMARY KEY,
	cpf varchar(255),
    varlor_total decimal(18,2),
    juros decimal(18,2),
	parcelas int,
	data_compra date
);
GO

