const nodemailer = require('nodemailer');
const db = require("../../models");
const moment = require("moment")

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tipsytwincities@gmail.com',
        pass: 'cohort3!'
    }
});

let sendList ="";

findPhones = phone => {
    sendList = phone + "@txt.att.net," + phone + "@tmomail.net," + phone + "@vzwpix.com," + phone + "@messaging.sprintpcs.com";
    return sendList
}

sendText = (phoneNumber, plantName) => {
    findPhones(phoneNumber);
    
    var mailOptions = {
        from: 'tipsytwincities@gmail.com',
        to: sendList,
        text: "You need to water your "+plantName+"!"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Text sent: ' + info.response);
        }
    });
};

module.exports = sendText;

let phoneArr = [];
let messageArr = [];

// FIND ALL USERS
db.User.findAll({include: [db.UserPlant, db.UserBadge, db.Friend]})
.then(res => 
    {
        // FOR EVERY USER IN DB...
        for(i=0; i<res.length; i++){
            console.log("-------------------------------------------------------")
            console.log("USER'S CELL PHONE: ", res[i].dataValues.cellPhone)
            let numPlants = res[i].dataValues.UserPlants.length

            // FOR EVERY PLANT FOR EACH USER IN DB...
            for(j=0; j<numPlants; j++){
                // GETTING RELEVANT INFO FROM RES
                let plantName = res[i].dataValues.UserPlants[j].dataValues.plantName;
                let waterInterval = res[i].dataValues.UserPlants[j].dataValues.wateringInterval;
                let lastWatered = res[i].dataValues.UserPlants[j].dataValues.lastWateredDate;
                console.log("USER PLANT NAME:", plantName);
                console.log("USER PLANT WATERING INTERVAL:", waterInterval);
                console.log("USER PLANT LAST WATERED:", lastWatered);
                // lastWatered = moment(lastWatered, "YYYY-MM-DD");
                let currentDate = moment().date();
                console.log(currentDate);
                console.log(lastWatered);
                switch(waterInterval) {
                    case "high":
                        waterInterval = 2
                        break;
                    case "medium":
                        waterInterval = 4
                        break;
                    case "low":
                        waterInterval = 7
                       
                    default:
                        console.log("NO WATERS")
                }
                console.log(waterInterval);
            }
        }

        // console.log("THIS IS WHERE WE ARE: ", res.length)
        // console.log("this found all users!", res[0].dataValues.UserPlants)
        // .dataValues.cellPhone)
    })

// run logic on who to send texts to 
// if(needsWater){
// sendText("6155947241");
// }

