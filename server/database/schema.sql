BEGIN;

DROP TABLE IF EXISTS user_info CASCADE; 

CREATE TABLE user_info (
id SERIAL PRIMARY KEY ,
username VARCHAR(100) NOT NULL ,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL 
);

COMMIT;
