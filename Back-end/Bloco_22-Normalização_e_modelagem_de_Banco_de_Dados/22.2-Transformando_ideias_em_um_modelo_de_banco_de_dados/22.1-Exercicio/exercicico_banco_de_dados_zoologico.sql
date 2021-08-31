CREATE SCHEMA IF NOT EXISTS Zoologico;

USE Zoologico;

CREATE TABLE IF NOT EXISTS Localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao_local VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    gerente_nome VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    cuidador_nome VARCHAR(50),
    gerente_id INT,
    FOREIGN KEY (gerente_id) REFERENCES Gerente(gerente_id)
);

CREATE TABLE IF NOT EXISTS Animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_nome VARCHAR(50),
    animal_especie VARCHAR(50),
    animal_sexo VARCHAR(20),
    animal_idade INT,
    localizacao_id INT,
    cuidador_id INT,
    FOREIGN KEY (cuidador_id) REFERENCES Cuidador(cuidador_id),
    FOREIGN KEY (localizacao_id) REFERENCES Localizacao(localizacao_id)
);
