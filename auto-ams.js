const {in_out, userInput} = require('./user_input');

const puppeteer = require('puppeteer');
const dotenv = require('dotenv');
dotenv.config();

// system requirements
const ams_url = process.env.URL;
const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// input filtration
userInput()

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
    // await page.click('#frmAttendanceQuickRequest #submit');
    // await page.waitForTimeout(3000);
    await page.screenshot({path : 'screenshots-db/screenshot.png'});
    browser.close();
}

// running core engine
run();