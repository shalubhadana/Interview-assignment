
import newPage from "../pageobjects/NewPage.js";
import assert from "assert";

describe('validating the news section', () => {
    it('STEP 1: open the url https://osa-web.t-cg.co.uk/ ', async()=> {
        await browser.url('https://osa-web.t-cg.co.uk');
    })

    it('STEP 2: Search for the text B16 8PE', async()=> {
        await newPage.searchField.waitForDisplayed();
        await newPage.searchField.setValue("B16 8PE");
        await newPage.searchButton.click();
    })

    it('STEP 3: Scroll down to the "Active Contact Group" and click to select the organization', async()=> {
        await newPage.activeContactGroup.waitForExist();
        await newPage.activeContactGroup.click();
        await newPage.finishloading.waitForExist();
 
    })

    it('STEP 4: validate news sections with recent news are displayed', async()=> {
        assert.equal(await newPage.loadRecentNews.isDisplayed(),true,"failed news section is not displayed for https://osa-web.t-cg.co.uk");

    })


    it('STEP 5: Open url https://osa-web.t-cg.co.uk/qatest ', async()=> {
        await browser.url('https://osa-web.t-cg.co.uk/qatest');;
        await newPage.finishloading.waitForExist();
 
    })

    it('STEP 6 : validate new sections with recent news are displayed for https://osa-web.t-cg.co.uk/qatest ', async()=> {
        assert.equal(await newPage.loadRecentNews.isDisplayed(),true,"failed news page resource is not displayed for https://osa-web.t-cg.co.uk/qatest");
    })


})