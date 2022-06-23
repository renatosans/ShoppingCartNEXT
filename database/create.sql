CREATE DATABASE IF NOT EXISTS commercedb;

USE commercedb;

CREATE TABLE IF NOT EXISTS produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255),
    foto LONGTEXT,
    formatoImagem VARCHAR(45),
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -----------------------------------------------------
-- Data for table 'produto'
-- -----------------------------------------------------
START TRANSACTION;

INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (1, 'Mesa de jantar 4 lugares', 1200, '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJ....', 'image/jpg;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (2, 'Cadeira para mesa de jantar', 510, '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAK....', 'image/jpg;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (3, 'Escrivaninha com gaveteiro', 930, '/9j/2wBDAAYEBQYFBAYGBQYHBwYIC....', 'image/jpg;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (4, 'Luminária de mesa', 125, 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIAAAB....', 'image/png;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (5, 'Forno de micro-ondas', 699, 'iVBORw0KGgoAAAANSUhEUgAAALQAA....', 'image/png;base64');
INSERT INTO produto (`id`, `nome`, `preco`, `foto`, `formatoImagem`) VALUES (6, 'Ventilador de teto', 768, 'iVBORw0KGgoAAAANSUhEUgAAALQAAADyCAIA....', 'image/png;base64');

COMMIT;
