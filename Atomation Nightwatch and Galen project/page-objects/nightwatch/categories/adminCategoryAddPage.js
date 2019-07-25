const util = require("util");
var linkHidden = "//span[@class='%s']/a[ancestor::td//a[text()='%s']]";
var columnTitle = "//td[@class='name column-name has-row-actions column-primary']/strong/a[text()='%s']";
var columnDescription = "//td[@class='description column-description']/p[ancestor::tr//a[text()='%s']]";
var columnSlug = "//td[@class='slug column-slug' and ancestor::tr//a[text()='%s']]";
module.exports = {
    commands: [{
        addNewCategory(name, slug, parent, description) {
            this
                .setValue('@inputName', name)
                .setValue('@inputSlug', slug)
                .setValue('@selectParent', parent)
                .setValue('@textareaDescription', description)
                .click('@inputAddCategory');
        },
        getColumnValueActual(type, categoryName, callback) {
            var formatColumnTitle = util.format(columnTitle, categoryName);
            var formatColumnSlug = util.format(columnSlug, categoryName);
            var formatColumnDescription = util.format(columnDescription, categoryName);
            switch (type) {
                case "Actual Title":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnTitle)
                        .getContainText(formatColumnTitle, callback);
                    break;
                case "Actual Slug":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnSlug)
                        .getContainText(formatColumnSlug, callback);
                    break;
                case "Actual Description":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnDescription)
                        .getContainText(formatColumnDescription, callback);
                    break;
            }
        },
        clickLink(columnName, linkHidden, action, categoryName) {
            this
                .useXpath()
                .waitForElementVisible(util.format(columnName, categoryName))
                .moveToElement(util.format(columnName, categoryName), 0, 0)
                .waitForElementVisible(util.format(linkHidden, action, categoryName))
                .click(util.format(linkHidden, action, categoryName))
        },
        goToAction(action, categoryName) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnTitle, linkHidden, 'edit', categoryName);
                    break;
                case 'Delete':
                    this.clickLink(columnTitle, linkHidden, 'delete', categoryName);
                    this.api.acceptAlert();
                    break;
            }
        }
    }],
    elements: {
        inputName: 'input[id=tag-name]',
        inputSlug: 'input[id=tag-slug]',
        selectParent: 'select[id=parent]',
        textareaDescription: 'textarea[id=tag-description]',
        inputAddCategory: 'input[id=submit]',
    }
};