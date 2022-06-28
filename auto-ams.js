const CoreEngine = require("./core-engine")
const dotenv = require('dotenv');
dotenv.config();

// system requirements
const ams_url = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// input filtration
const in_put = process.argv[2].toLowerCase();
var in_out = "";

if(in_put == 'in'){
    in_out = "In"
}else if (in_put == 'out') {
    in_out = "Out"
}
else{
    console.log('Either type IN or OUT and TRY AGAIN')
    return
}

// running core engine
CoreEngine(ams_url, email, password, in_out, 'wfo');