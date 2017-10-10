SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE DATABASE speak;

CREATE TABLE IF NOT EXISTS 'petition' (
  'petition_id' int,
  'title' varchar(500),
  'description' text(1500),
  'tags' varchar(500),
  'category' varchar(100),
  'permissions' varchar(100),
  'deadline' smalldatetime,
  'signature_goal' int,
  'signatures' int,
  'date' smalldatetime,
  PRIMARY KEY('petition_id')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS 'user' (
  'id' int,
  'name' varchar(100),
  'email' varchar(100),
  'ubit' int,
  'type' varchar(100),
  'major' varchar(100),
  PRIMARY KEY('id')
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS 'signature' (
  'signature_id' int,
  'petition_id' int,
  'user_id' int,
  'date' smalldatetime,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO 'petition' ('petition_id', 'title', 'description') VALUES
(1,'Heated Bus Stops','We wants the bus stops to be warm in the winter!');

INSERT INTO 'user' ('id','name','email','ubit','type','major') VALUES
(1,'Katie James','knjames@buffalo.edu',50113704,'Undergrad','CSE');

INSERT INTO 'signatures' ('signature_id','petition_id','user_id') VALUES
(1,1,1);
