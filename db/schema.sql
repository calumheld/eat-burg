CREATE DATABASE burg_db;
USE burg_db;

CREATE TABLE burgs(
    id int NOT NULL auto_increment,
    name VARCHAR(255)NOT NULL,
    eaten BOOLEAN DEFAULT false,
    primary key (id)
);