const util = require("util");
var linkHidden = "//span[@class='%s']/a[ancestor::td//a[text()='%s']]";
var columnTitle = "//td[@class='name column-name has-row-actions column-primary']/strong/a[text()='%s']";
var columnDescription = "//td[@class='description column-description']/p[ancestor::tr//a[text()='%s']]";
var columnSlug = "//td[@class='slug column-slug' and ancestor::tr//a[text()='%s']]";
module.exports = {
    commands: [{
        addNewTag(tagName, slugName, description) {
            this
                .setValue('@inputTagName', tagName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@inputAddNewTag');
        },
        getColumnValueActual(type, nameTag, callback) {
            var formatColumnTitle = util.format(columnTitle, nameTag);
            var formatColumnSlug = util.format(columnSlug, nameTag);
            var formatColumnDescription = util.format(columnDescription, nameTag);
            switch (type) {
                case "Actual Title":
                    this
                        .waitForElementVisible(formatColumnTitle)
                        .getContainText(formatColumnTitle, callback);
                    break;
                case "Actual Slug":
                    this
                        .waitForElementVisible(formatColumnSlug)
                        .getContainText(formatColumnSlug, callback);
                    break;
                case "Actual Description":
                    this
                        .waitForElementVisible(formatColumnDescription)
                        .getContainText(formatColumnDescription, callback);
                    break;
            }
        },
        clickLink(columnName, linkHidden, action, nameTag) {
            this
                .waitForElementVisible(util.format(columnName, nameTag))
                .moveToElement(util.format(columnName, nameTag), 0, 0)
                .waitForElementVisible(util.format(linkHidden, action, nameTag))
                .click(util.format(linkHidden, action, nameTag));
        },
        goToAction(action, nameTag) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnTitle, linkHidden, 'edit', nameTag);
                    break;
                case 'Delete':
                    this.clickLink(columnTitle, linkHidden, 'delete', nameTag);
                    this.api.acceptAlert();
                    break;
            }
        },
    }],
    elements: {
        inputTagName: 'input[id=tag-name]',
        inputSlugName: 'input[id=tag-slug]',
        inputDescription: 'textarea[id=tag-description]',
        inputAddNewTag: 'input[id=submit]',
    }
};