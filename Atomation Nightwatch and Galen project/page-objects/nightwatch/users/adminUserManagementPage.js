const util = require("util");
var linkHidden = "//span[@class='delete']/a[ancestor::td//a[text()='%s']]";
var columnUsername = "//strong/a[text()='%s']";
var columnName = "//td[@class='name column-name' and ancestor::tr//a[text()='%s']]";
var columnEmail = "//td[@class='email column-email']/a[ancestor::tr//a[text()='%s']]";
var columnRole = "//td[@class='role column-role' and ancestor::tr//a[text()='%s']]";
module.exports = {
    commands: [{
        getColumnValueActual(type, username, callback) {
            var formatColumnUsername = util.format(columnUsername, username);
            var formatColumnName = util.format(columnName, username);
            var formatColumnEmail = util.format(columnEmail, username);
            var formatColumnRole = util.format(columnRole, username);
            switch (type) {
                case "Actual Username":
                    this
                        .waitForElementVisible(formatColumnUsername)
                        .getContainText(formatColumnUsername, callback);
                    break;
                case "Actual Name":
                    this
                        .waitForElementVisible(formatColumnName)
                        .getContainText(formatColumnName, callback);
                    break;
                case "Actual Email":
                    this
                        .waitForElementVisible(formatColumnEmail)
                        .getContainText(formatColumnEmail, callback);
                    break;
                case "Actual Role":
                    this
                        .waitForElementVisible(formatColumnRole)
                        .getContainText(formatColumnRole, callback);
                    break;
            }
        },
        clickLink(columnName, linkHidden, nameTag) {
            this
                .waitForElementVisible(util.format(columnName, nameTag))
                .moveToElement(util.format(columnName, nameTag), 0, 0)
                .waitForElementVisible(util.format(linkHidden, nameTag))
                .click(util.format(linkHidden, nameTag));
        },
        deleteUser(username) {
            var self = this;
            this.clickLink(columnUsername, linkHidden, username);
            self.getAttribute('@inputConfirmDeletion', 'disabled', function (result) {
                if (result.value == "true") {
                    self
                        .click('inputDeleteAllContent')
                        .click('@inputConfirmDeletion');
                } else {
                    self.click('@inputConfirmDeletion');
                }
            })
        }
    }],
    elements: {
        inputConfirmDeletion: 'input[id=submit]',
        inputDeleteAllContent: 'input[id=delete_option0]',
    }
}