// const nodemailer = require('nodemailer');
// const db = require("../../models");
// const moment = require("moment")

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'tipsytwincities@gmail.com',
//         pass: 'cohort3!'
//     }
// });

// let sendList = "";

// findPhones = phone => {
//     sendList = phone + "@txt.att.net," + phone + "@tmomail.net," + phone + "@vzwpix.com," + phone + "@messaging.sprintpcs.com";
//     return sendList
// }

// let phoneArr = [];
// let plantNameArr = [];


// sendText = (phoneNumber, plantName) => {
//     findPhones(phoneNumber);

//     var mailOptions = {
//         from: 'tipsytwincities@gmail.com',
//         to: sendList,
//         text: "You need to water your " + plantName + "!"
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Text sent: ' + info.response);
//         }
//     });
// };

// // FIND ALL USERS
// db.User.findAll({ include: [db.UserPlant, db.UserBadge, db.Friend] })
//     .then(res => {
//         // FOR EVERY USER IN DB...
//         for (i = 0; i < res.length; i++) {
//             // console.log("-------------------------------------------------------")
//             let userCell = res[i].dataValues.cellPhone
//             // console.log("USER'S CELL PHONE: ", userCell)
//             let numPlants = res[i].dataValues.UserPlants.length

//             // FOR EVERY PLANT FOR EACH USER IN DB...
//             for (j = 0; j < numPlants; j++) {
//                 // GETTING RELEVANT INFO FROM RES
//                 let plantName = res[i].dataValues.UserPlants[j].dataValues.plantName;
//                 let plantID = res[i].dataValues.UserPlants[j].dataValues.id;
//                 let waterInterval = res[i].dataValues.UserPlants[j].dataValues.wateringInterval;
//                 let lastWatered = res[i].dataValues.UserPlants[j].dataValues.lastWateredDate;
//                 // console.log("USER PLANT NAME:", plantName);
//                 // console.log("USER PLANT WATERING INTERVAL:", waterInterval);
//                 // console.log("USER PLANT LAST WATERED:", lastWatered);
//                 let currentDate = moment().format("YYYY-MM-DD");
//                 // console.log(currentDate);
//                 // console.log(lastWatered);
//                 switch (waterInterval) {
//                     case "high":
//                         waterInterval = 2
//                         break;
//                     case "medium":
//                         waterInterval = 4
//                         break;
//                     case "low":
//                         waterInterval = 7

//                     default:
//                         console.log("NO WATERS")
//                 }
//                 // console.log(waterInterval);
//                 lastWatered = moment(lastWatered).add(waterInterval, 'days').format("YYYY-MM-DD");
//                 // console.log(lastWatered);
//                 let needsWater = moment(lastWatered).isAfter(currentDate);
//                 // console.log(needsWater);
//                 if (needsWater) {
//                     phoneArr.push(userCell);
//                     plantNameArr.push(plantName);
//                     db.UserPlant
//                         .update({ needsToBeWatered_bool: true }, { where: { id: plantID } })
//                         .then(console.log("This water was switched to 'NEEDS WATER'"))
//                         .catch(err => res.status(422).json(err));
//                 }
//             }
//         }

//         for(w=phoneArr.length; w>=0; w--){
//             sendText(phoneArr[w], plantNameArr[w]);
//             phoneArr.pop();
//             plantNameArr.pop();
//         }
//     });
