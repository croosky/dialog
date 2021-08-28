const puppeteer = require('puppeteer');
const path = require('path');
const hs = require('hs-test-web');
const react = require("hs-test-web-server");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function stageTest() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args:['--start-maximized', '--disable-infobar'],
        ignoreDefaultArgs: ['--enable-automation'],
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:31328');

    page.on('console', msg => console.log(msg.text()));

    let result = await hs.testPage(page,
        () => {




            return hs.correct();
        }
    );

    await sleep(3000);

    await browser.close();

    return result;
}

jest.setTimeout(30000);

test("Test stage", async () => {
    let result = await react.startServerAndTest(
        'localhost', 31328, path.resolve(__dirname, '..'), stageTest
    );

    if (result['type'] === 'wrong') {
        throw new Error(result['message']);
    }
});