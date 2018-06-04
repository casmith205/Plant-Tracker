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

CREATE TABLE usda_plant_data_db;


use plantdb;

use gxe7hd3rssbfk7oz;

INSERT INTO users (userName, password, email, cellPhone, address, zipCode, createdAt, updatedAt) VALUES ('mickey-mouse', '123456', 'mickey@disney.com', '0123456789', '10 Main Street', 55401, now(), now());
INSERT INTO users (userName, password, email, cellPhone, address, zipCode, createdAt, updatedAt) VALUES ('superman', '123456', 'sup-man@hall-of-justice.com', '0123456789', '10 Main Street', 55401, now(), now());

INSERT INTO userplants (plantName, wateringInterval, type, createdAt, updatedAt, UserId) VALUES ('basil', 'medium', 'indoor', now(), now(), '5');
INSERT INTO userplants (plantName, wateringInterval, type, createdAt, updatedAt, UserId) VALUES ('spider plant', 'high', 'indoor', now(), now(), '5');
INSERT INTO userplants (plantName, wateringInterval, type, createdAt, updatedAt, UserId) VALUES ('rose', 'high', 'outdoor', now(), now(), '5');


INSERT INTO userbadges (BadgeId, createdAt, updatedAt, UserId) VALUES ('2', now(), now(), '3');
INSERT INTO userbadges (BadgeId, createdAt, updatedAt, UserId) VALUES ('1', now(), now(), '4');
INSERT INTO userbadges (BadgeId, createdAt, updatedAt, UserId) VALUES ('1', now(), now(), '3');

INSERT INTO badges (badgeName, badgeDescription, badgeImage, numberCriteria, statusCriteria, createdAt, updatedAt) VALUES ('Black Thumb', "You are....well let's just say the gnomes make fun of you.", "../../images/badges/deadplantbadge.png",10, "dead", now(), now());
INSERT INTO badges (badgeName, badgeDescription, badgeImage, numberCriteria, statusCriteria, createdAt, updatedAt) VALUES ('RIP MY FIRST LOVE', "Accidents happen...but this plant will forver be in your memory as your first death in the family","../../images/badges/deadplantbadge.png", 1, "dead", now(), now());
INSERT INTO badges (badgeName, badgeDescription, badgeImage, numberCriteria, statusCriteria, createdAt, updatedAt) VALUES ('Welcome!', "You just made your first step to a better, plant-filled life!", "../../images/badges/firstplantbadge.png",1, "alive", now(), now());

INSERT INTO badges (badgeName, badgeDescription, numberCriteria, statusCriteria, createdAt, updatedAt) VALUES ('Greenish Thumb', 'You are doing well.  That thumb of yours is a bit like a leprechaun', now(), now());
INSERT INTO badges (badgeName, badgeDescription, numberCriteria, statusCriteria, createdAt, updatedAt) VALUES ('Emerald Thumb', "The irish are considering renaming St. Patrick's day after you.", now(), now());

use plantdb;
### adding theses to work with sequelize
ALTER TABLE usda_plant_data_db ADD Column createdAt timestamp NOT NULL DEFAULT now();
ALTER TABLE usda_plant_data_db ADD Column updatedAt timestamp NOT NULL DEFAULT now();
ALTER TABLE usda_plant_data_db DROP column createdAt;
ALTER TABLE usda_plant_data_db DROP column updatedAt;

DELETE FROM `plantdb`.`users` WHERE `id`='6';

TRUNCATE gxe7hd3rssbfk7oz.usda_plant_data_db;



