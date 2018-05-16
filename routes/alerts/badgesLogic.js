const db = require("../../models");
const moment = require("moment")


let userIdArr = [];
let badgeNameArr = [];


addBadge = (userId, badgeName) => {

};

// FIND ALL BADGES

// FIND ALL PLAN

// ADD TO USERBADGES

// FIND ALL USERS & THEIR PLANTS
db.User.findAll({ include: [db.UserPlant, db.UserBadge, db.Friend] })
    .then(res => {
        // FOR EVERY USER IN DB...
        // for (i = 0; i < res.length; i++) {
        //     console.log("-------------------------------------------------------")
            let userCell = res[i].dataValues.id
            console.log("USER'S CELL PHONE: ", userCell)
        //     let numPlants = res[i].dataValues.UserPlants.length

        //     // FOR EVERY PLANT FOR EACH USER IN DB...
        //     for (j = 0; j < numPlants; j++) {
        //         // GETTING RELEVANT INFO FROM RES
        //         let plantName = res[i].dataValues.UserPlants[j].dataValues.plantName;
        //         let waterInterval = res[i].dataValues.UserPlants[j].dataValues.wateringInterval;
        //         let lastWatered = res[i].dataValues.UserPlants[j].dataValues.lastWateredDate;
        //         console.log("USER PLANT NAME:", plantName);
        //         console.log("USER PLANT WATERING INTERVAL:", waterInterval);
        //         console.log("USER PLANT LAST WATERED:", lastWatered);
        //         // lastWatered = moment(lastWatered, "YYYY-MM-DD");
        //         let currentDate = moment().format("YYYY-MM-DD");
        //         console.log(currentDate);
        //         console.log(lastWatered);
        //         switch (waterInterval) {
        //             case "high":
        //                 waterInterval = 2
        //                 break;
        //             case "medium":
        //                 waterInterval = 4
        //                 break;
        //             case "low":
        //                 waterInterval = 7

        //             default:
        //                 console.log("NO WATERS")
        //         }
        //         console.log(waterInterval);
        //         lastWatered = moment(lastWatered).add(waterInterval, 'days').format("YYYY-MM-DD");
        //         console.log(lastWatered);
        //         let needsWater = moment(lastWatered).isAfter(currentDate)
        //         console.log(needsWater);
        //         if (needsWater) {
        //             phoneArr.push(userCell);
        //             plantNameArr.push(plantName);
        //         }
        //     }
        // }

        // console.log(phoneArr);
        // console.log(plantNameArr);
        // for(w=phoneArr.length; w>=0; w--){
        //     sendText(phoneArr[w], plantNameArr[w]);
        //     phoneArr.pop();
        //     plantName.pop();
    // }
    });
