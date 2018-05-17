const db = require("../../models");
const moment = require("moment")


let userIdArr = [];
let badgeNameArr = [];


// FIND ALL USERS & THEIR PLANTS
findUsers = () => {
    db.User.findAll({ include: [db.UserPlant, db.UserBadge, db.Friend] })
        .then(res => {
            // FOR EVERY USER IN DB...
            for (i = 0; i < res.length; i++) {
                // console.log("-------------------------------------------------------")
                let userID = res[i].dataValues.id
                let existingBadgesforUser = [];
                // console.log("THIS IS THE USER WE ARE ON:", userID)
                let numPlants = res[i].dataValues.UserPlants.length
                let numBadges = res[i].dataValues.UserBadges.length
                let deadPlantCount = 0;
                let alivePlantCount = 0;

                // console.log(numBadges);
                for (v = 0; v < numBadges; v++) {
                    // console.log("USER HAS THIS BADGE:",res[i].dataValues.UserBadges[v].dataValues.BadgeId);
                    existingBadgesforUser.push(res[i].dataValues.UserBadges[v].dataValues.BadgeId);
                }
                // console.log(existingBadgesforUser);
                // FOR EVERY PLANT FOR EACH USER IN DB...
                for (j = 0; j < numPlants; j++) {
                    // GETTING RELEVANT INFO FROM RES
                    let plantStatus = res[i].dataValues.UserPlants[j].dataValues.status;

                    // console.log("USER PLANT STATUS:", plantStatus);
                    switch (plantStatus) {
                        case "alive":
                            alivePlantCount++;
                            break;
                        case "dead":
                            deadPlantCount++;
                            break;
                        default:
                            console.log("needs attn");
                    }
                }

                db.Badge.findAll()
                    .then(res => {
                        // console.log("this found all BADGES possible!!", res);
                        for (q = 0; q < res.length; q++) {
                            // console.log("-------------------------------------------------------")
                            let badgeID = res[q].dataValues.id;
                            // console.log(badgeID);
                            let numberCriteria = res[q].dataValues.numberCriteria;
                            let statusCriteria = res[q].dataValues.statusCriteria;
                            // console.log(numberCriteria,statusCriteria)

                            // IF THE NUMBER & STATUS CRITERIA MATCH THE CURRENT PLANT, 
                            // PUSH THIS BADGE ID TO AN ARRAY OF BADGES TO ADD

                            console.log("THIS USER ",userID, "HAS ",alivePlantCount, " ALIVE PLANTS AND ",deadPlantCount, "DEAD PLANTS. THIS BADGE, ", badgeID, ", REQUIRES ",numberCriteria, " ",statusCriteria, " PLANTS!")
                            if ((numberCriteria <= alivePlantCount && statusCriteria == "alive") ||(numberCriteria <= deadPlantCount && statusCriteria == "dead") ) {
                                if (existingBadgesforUser.indexOf(badgeID) == -1) {
                                    db.UserBadge.create({
                                        BadgeId: badgeID,
                                        UserId: userID
                                    })
                                        .then(res => console.log("ADDED BADGE ", badgeID, " to USER ", userID))
                                        .catch(err => res.status(422).json(err));
                                }
                            };
                        }
                    })
            }
        });
};


findUsers();
