drop database if exists todo_part1;

create database todo_part1;

use todo_part1;

create table task (
    id int primary key auto_increment,
    description varchar(255) not null
);

insert into task (description) values ('My test task');
insert into task (description) values ('My other test task');