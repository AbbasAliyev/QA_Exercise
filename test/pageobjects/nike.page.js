const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NikePage extends Page {

    get familyTree () { return $('.toccolours')}
    get nikeHeader () { return $('#firstHeading')}

    open () {
        return super.open('Nike_(mythology)');
    }
}

module.exports = new NikePage();
