const mainPage = require('../pageobjects/main.page');
const nikePage = require('../pageobjects/nike.page');

describe('Main page', () => {
    before( () => {
        mainPage.open();
        browser.maximizeWindow();
    });
    it('the headings listed in the `Contents` box are used as headings on the page\n', function () {

        for (let i = 0; i < 6; i++) {
            let contText = mainPage.contentBox[i].getText();
            let headText = mainPage.header[i].getText();
            expect(contText).toEqual(headText);

        }
    });

    it('the headings listed in the `Contents` box have functioning hyperlinks', function () {

        for (let i = 0; i < 6; i++) {
            let contText = mainPage.contentBox[i];
            expect(contText).toBeClickable();
        }
    });
    it('In the _Personified concepts_, `Nike` has a popup that contains the following text:', function () {

        mainPage.nikeLink.scrollIntoView();
        mainPage.nikeLink.moveTo();
        browser.pause(1000);
        expect(mainPage.popUpText.getText()).toEqual("In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.")
    });

    it('In the _Personified concepts_, if you click on `Nike`, it takes you to a page that displays a family tree\n', function () {

        browser.refresh();
        mainPage.nikeLink.click();
        browser.pause(1000);
        nikePage.familyTree.scrollIntoView();
        expect(nikePage.familyTree).toBeDisplayed();
        browser.pause(1000);
    });
});



