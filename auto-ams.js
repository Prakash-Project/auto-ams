const puppeteer = require('puppeteer');

// requirements
const ams_url = "https://hrm.ingnepal.com/Security/Account/Login";
const email = "";
const password = "";

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

// core engine
async function run () {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox'
        ],
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(ams_url, {waitUntil: 'load', timeout: 0});
    await page.click('.pop-up');
    await page.waitForTimeout(4000);
    await page.type("#frmAttendanceQuickRequest #LoginID", email);
    await page.type("#frmAttendanceQuickRequest #LoginPassword", password);
    await page.select("#Direction", in_out);
    await page.click('#frmAttendanceQuickRequest #submit');
    await page.waitForTimeout(3000);
    await page.screenshot({path : 'screenshots-db/screenshot.png'});
    browser.close();
}

// running core engine
run();