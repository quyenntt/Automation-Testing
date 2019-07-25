const util = require('util');
var columnTitle = "//strong/a[ancestor::tr[@id='post-%s']]";
var linkHidden = "//span[@class='%s']/a[ancestor::tr[@id='post-%s']]";
module.exports = {
    commands: [{
        goToDetailPost(idPost) {
            this.click(util.format(columnTitle, idPost));
        },
        clickLink(columnName, hideLink, action, idPost) {
            this
                .waitForElementVisible(util.format(columnName, idPost))
                .moveToElement(util.format(columnName, idPost), 0, 0)
                .waitForElementVisible(util.format(hideLink, action, idPost))
                .click(util.format(hideLink, action, idPost));
        },
        goToAction(action, idPost) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnTitle, linkHidden, 'edit', idPost);
                    break;
                case 'Delete':
                    this.clickLink(columnTitle, linkHidden, 'trash', idPost);
                    break;
            }
        }
    }],
    
};