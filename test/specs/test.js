const metisPage = require('../pageobjects/metis.page');
const nikePage = require('../pageobjects/nike.page');

describe('Main page', () => {
    before( () => {
        metisPage.open();
        browser.maximizeWindow();
    });

    it('The headings listed in the `Contents` box are used as headings on the page', function () {
        for (let i = 0; i < 6; i++) {
            let contText = metisPage.contentBox[i].getText();
            let headText = metisPage.header[i].getText();
            expect(contText).toEqual(headText);
        }
    });

    it('The headings listed in the `Contents` box have functioning hyperlinks', function () {
        for (let i = 0; i < 6; i++) {
            let contText = metisPage.contentBox[i];
            expect(contText).toBeClickable();
        }
    });

    it('In the _Personified concepts_, `Nike` has a popup that contains the following text:', function () {
        metisPage.nikeLink.scrollIntoView();
        metisPage.nikeLink.moveTo();
        browser.pause(1000);
        expect(metisPage.popUpText.getText()).toEqual("In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.")
    });

    it('In the _Personified concepts_, if you click on `Nike`, it takes you to a page that displays a family tree', function () {
        browser.refresh();
        metisPage.nikeLink.click();
        nikePage.nikeHeader.waitForDisplayed();
        nikePage.familyTree.scrollIntoView();
        expect(nikePage.familyTree).toBeDisplayed();
    });
});



