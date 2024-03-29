const CoreEngine = require("./core-engine")
const dotenv = require('dotenv');
dotenv.config();

// system requirements
const ams_url = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

var checkIn_time = 1001
var checkout_time = 2200

// finding current date and time
var findTime = () => {
    var date = new Date();
    var day = date.getDay();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + min;
}

// logic : day & time
while (true) {
    var current_time = findTime()
    // if (day != 6 && day != 7) {
    if (current_time == checkIn_time) {
        console.log("checked in")
        return CoreEngine(ams_url, email, password, "In", 'wfo');
    }
    // }
}

// pseudocode
// check in time e.g. 14:00
// check out time e.g. 22:00 

// check date 
//      if its sunday or saturday donot execute the code
//      else 
//          check current time 
//          if current time equals check_in time
//              execute check_in code
//          if current time equals check_out time
//              execute check_out code
// remove terminal input .. run once execute all the time

// https://stackoverflow.com/questions/7357734/how-do-i-get-the-time-of-day-in-javascript-node-js