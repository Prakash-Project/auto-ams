const puppeteer = require('puppeteer');
const ams_url = "https://hrm.ingnepal.com/Security/Account/Login";
const email = "";
const password = "";

// input filter
const in_put = process.argv[2];
var in_out = "";
if(in_put == "in" || in_put == "In" || in_put == "IN" || in_put == "iN"){
    in_out = "In"
}else if (in_put == "out" || in_put == "Out") {
    in_out = "Out"
}
else{
    console.log('Either type IN or OUT')
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
    await page.waitForTimeout(3000);
    await page.type("#frmAttendanceQuickRequest #LoginID", email);
    await page.type("#frmAttendanceQuickRequest #LoginPassword", password);
    await page.select("#Direction", in_out);
    await page.click('#frmAttendanceQuickRequest #submit');
    await page.waitForTimeout(3000);
    await page.screenshot({path : 'screenshots-db/screenshot.png'});
    browser.close();
}

run();