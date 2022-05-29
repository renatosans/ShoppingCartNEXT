
CREATE DATABASE IF NOT EXISTS commercedb;

use commercedb;

CREATE TABLE IF NOT EXISTS produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2),
    foto LONGTEXT NOT NULL,
    formatoImagem VARCHAR(45) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe produto;
