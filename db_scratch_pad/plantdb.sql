### use th 
SELECT * FROM plantdb.usda_plant_data_db;

select * FROM plantdb.usda_plant_data_db WHERE CommonName like '%garden tomato%' 
	OR CommonName like '%basil%' or CommonName like '%common bamboo%' ;

SELECT * FROM Customers WHERE Country='Mexico';

### use the following to create the DB
CREATE DATABASE plantdb;
use plantdb;

### use this command if the import named it something else
RENAME TABLE usdaplantslesscolumns TO usda_plant_data_db;


use plantdb;
INSERT INTO users (userName, password, email, cellPhone, address, zipCode, createdAt, updatedAt) VALUES ('mickey-mouse', '123456', 'mickey@disney.com', '0123456789', '10 Main Street', 55401, now(), now());
INSERT INTO users (userName, password, email, cellPhone, address, zipCode, createdAt, updatedAt) VALUES ('superman', '123456', 'sup-man@hall-of-justice.com', '0123456789', '10 Main Street', 55401, now(), now());


INSERT INTO userplants (plantName, wateringInterval, type, createdAt, updatedAt, UserId) VALUES ('basil', 'medium', 'indoor', now(), now(), '2');
INSERT INTO userplants (plantName, wateringInterval, type, createdAt, updatedAt, UserId) VALUES ('spider plant', 'high', 'indoor', now(), now(), '2');

### adding theses to work with sequelize
ALTER TABLE usda_plant_data_db ADD Column createdAt timestamp NOT NULL DEFAULT now();
ALTER TABLE usda_plant_data_db ADD Column updatedAt timestamp NOT NULL DEFAULT now();


