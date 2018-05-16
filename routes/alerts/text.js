// get from database
// run logic on who to send texts to 
// put in repeating logic for sending a text 

const nodemailer = require('nodemailer');

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

// sendText("6155947241");