const util = require('util');
var columnTitle = "//strong/a[ancestor::tr[@id='post-%s']]";
var linkHidden = "//span[@class='%s']/a[ancestor::tr[@id='post-%s']]";
module.exports = {
    commands: [{
        goToDetailPage(idPage) {
            this.click(util.format(columnTitle, idPage));
        },
        clickLink(columnName, hideLink, action, idPage) {
            this
                .waitForElementVisible(util.format(columnName, idPage))
                .moveToElement(util.format(columnName, idPage), 0, 0)
                .waitForElementVisible(util.format(hideLink, action, idPage))
                .click(util.format(hideLink, action, idPage));
        },
        goToAction(action, idPage) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnTitle, linkHidden, 'edit', idPage);
                    break;
                case 'Delete':
                    this.clickLink(columnTitle, linkHidden, 'trash', idPage);
                    break;
            }
        },
    }],
};