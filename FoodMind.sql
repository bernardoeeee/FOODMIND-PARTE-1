create database FoodMind;
use FoodMind;


create table signUp(
	id_user int auto_increment not null primary key,
    name varchar(255) not null,
    email varchar(255) unique not null,
    password varchar(10) unique not null
);


create table signIn(
	id_user int,
    email varchar(255) unique not null,
    password varchar(10) unique not null,
    
    foreign key(id_user) references signUp(id_user),
    foreign key(email) references signUp(email),
    foreign key(password) references signUp(password)
);
INSERT INTO signUp(name, email, password) VALUES('bernardo','bvfleck273@gmaasi.com',"121231231");
drop table signUp;
SELECT * FROM signUp;