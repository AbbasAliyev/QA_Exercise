const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
    get contentBox () { return $$('.toctext') }
    get header () { return $$('.mw-headline') }
    get nikeLink () { return $(`//div[@class="div-col"]//a[@title="Nike (mythology)"]`)}
    get popUpText () { return $('.mwe-popups-extract>p')}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('Metis_(mythology)');
    }
}

module.exports = new MainPage();
