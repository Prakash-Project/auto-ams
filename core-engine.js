const puppeteer = require('puppeteer');

module.exports = async function CoreEngine(url, email, password, in_out, wfo_wfh) {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox'
        ],
        headless: true
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    await page.click('.pop-up');
    await page.waitForTimeout(4000);
    await page.type("#frmAttendanceQuickRequest #LoginID", email);
    await page.type("#frmAttendanceQuickRequest #LoginPassword", password);

    // select wfh or wfo
    if (wfo_wfh == 'wfh') {
        await page.click('input[id=IsWorkFromHome][value=True]');
    } else {
        await page.click('input[id=IsWorkFromHome][value=False]');

    }
    await page.select("#Direction", in_out);
    await page.click('#frmAttendanceQuickRequest #submit');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'screenshots-db/screenshot.png' });
    browser.close();
}
