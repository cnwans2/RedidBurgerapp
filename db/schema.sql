CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burger2 (
 id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

 