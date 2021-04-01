const Page = require('./page');

class MetisPage extends Page {

    get contentBox () { return $$('.toctext') }
    get header () { return $$('.mw-headline') }
    get nikeLink () { return $(`//div[@class="div-col"]//a[@title="Nike (mythology)"]`)}
    get popUpText () { return $('.mwe-popups-extract>p')}

    open () {
        return super.open('Metis_(mythology)');
    }
}

module.exports = new MetisPage();
