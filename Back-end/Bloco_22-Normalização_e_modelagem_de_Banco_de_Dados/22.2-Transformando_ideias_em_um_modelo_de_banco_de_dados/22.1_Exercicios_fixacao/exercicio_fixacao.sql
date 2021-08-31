CREATE DATABASE IF NOT EXISTS catalog_albuns;

USE catalog_albuns;

CREATE TABLE IF NOT EXISTS estilo(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_name VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    album_name VARCHAR(50) NOT NULL,
    price DOUBLE NOT NULL,
    estilo_id INT NOT NULL,
    artista_id INT NOT NULL,
    FOREIGN KEY (estilo_id) REFERENCES estilo(estilo_id),
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS musica(
	musica_id INT PRIMARY KEY AUTO_INCREMENT,
    musica_name VARCHAR(50), 
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=InnoDB;
