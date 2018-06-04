SELECT * FROM gxe7hd3rssbfk7oz.usda_plant_data_db;

LOAD DATA LOCAL INFILE
'C:\\Users\\marting\\Documents\\uOfMinnesotaBootCampHomeworks\\Plant-tracker\\db_scratch_pad\\usdaplantsLESSCOLUMNS.csv' INTO TABLE `usda_plant_data_db`
CHARACTER SET 'utf8'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE
'C:\\Users\\marting\\Documents\\uOfMinnesotaBootCampHomeworks\\Plant-tracker\\db_scratch_pad\\usdaplants_small.csv' INTO TABLE `usda_plant_data_db`
CHARACTER SET 'utf8'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

INSERT INTO `UserPlants` (`id`,`plantName`,`needsToBeWatered_bool`,`wateringInterval`,`lastWateredDate`,`status`,`type`,`createdAt`,`updatedAt`,`UserId`) 
VALUES (DEFAULT,'tuliptree',false,' RI','2018-06-03','alive','indoor','2018-06-03 19:15:20','2018-06-03 19:15:20','2');


LOAD DATA LOCAL INFILE
'C:\\Users\\marting\\Documents\\uOfMinnesotaBootCampHomeworks\\Plant-tracker\\db_scratch_pad\\usdaplantsLESSCOLUMNS_under5mb.csv' INTO TABLE `usda_plant_data_db`
CHARACTER SET 'utf8'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;