const puppeteer = require('puppeteer');
const ams_url = "https://hrm.ingnepal.com/Security/Account/Login"
const email = "your@email.com"
const password = "test-test"

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(ams_url, {waitUntil: 'load', timeout: 0});
    await page.click('.pop-up');
    await page.waitForTimeout(3000);
    await page.type("#frmAttendanceQuickRequest #LoginID", email);
    await page.type("#frmAttendanceQuickRequest #LoginPassword", password);
    // await page.click('#frmAttendanceQuickRequest #submit');
    await page.waitForTimeout(3000);
    await page.screenshot({path : 'screenshots-db/screenshot.png'});
    browser.close();
}

run();

// pseudocode
// open ams - attendence management system - done
// click "submit attendence" button - done

// fill form
// input email - doing
// screenshot page after submit attendence
// input password
// check "Work From Home" radio button
// select "check In" from the option
// click "Submit" button

// screen shot for testing purpose