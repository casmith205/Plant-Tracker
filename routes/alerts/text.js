const nodemailer = require('nodemailer');
const db = require("../../models");

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

sendText = phoneNumber => {
    findPhones(phoneNumber);
    
    var mailOptions = {
        from: 'tipsytwincities@gmail.com',
        to: sendList,
        text: "You need to water your plants!!"
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
// let 

db.User.findAll({include: [db.UserPlant, db.UserBadge, db.Friend]})
.then(res => 
    {
        for(i=0; i<res.length; i++){
            // console.log("THIS IS WHERE WE ARE: ", res[i])
            console.log("USER PLANTS:", res[i].dataValues.UserPlants) 
        }

        // console.log("THIS IS WHERE WE ARE: ", res.length)
        // console.log("this found all users!", res[0].dataValues.UserPlants)
        // .dataValues.cellPhone)
    })

// run logic on who to send texts to 
// if(needsWater){
// sendText("6155947241");
// }

