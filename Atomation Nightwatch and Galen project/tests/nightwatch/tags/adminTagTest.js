var randomString = require('../../../commons/utils/randomString.js');
var nameTag = randomString('automation testing');
var slugTag = randomString('automation-test');
var descriptionTag = 'To learn Automation testing';
var editNameTag = randomString('automation');
var editSlugTag = randomString('automation-testing');
var editDescriptionTag = 'To learn Automation testing by using nightwatch';
var messageTagUpdated = 'Tag updated.';
var dashboardPage, addTagPage, username, password, loginPage, editTagPage;
module.exports = {
    '@tags': ['tag'],
    before: (browser) => {
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        addTagPage = browser.page.adminTagAddPage();
        editTagPage = browser.page.adminTagEditPage();
        loginPage.login(username, password);
    },
    'Verify that admin can add a new tag with valid data ': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Tag');
            addTagPage.addNewTag(nameTag, slugTag, descriptionTag);
            addTagPage.getColumnValueActual('Actual Title', nameTag, function (actualTitle) {
                browser.assert.equal(actualTitle, nameTag);
            });
            addTagPage.getColumnValueActual('Actual Slug', nameTag, function (actualSlug) {
                browser.assert.equal(actualSlug, slugTag);
            });
            addTagPage.getColumnValueActual('Actual Description', nameTag, function (actualDescription) {
                browser.assert.equal(actualDescription, descriptionTag);
            });
            addTagPage.goToAction('Delete', nameTag);
            done();
        });
    },
    'Verify that admin can edit tag with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Tag');
            addTagPage.addNewTag(nameTag, slugTag, descriptionTag);
            addTagPage.goToAction('Edit', nameTag);
            editTagPage.editTag(editNameTag, editSlugTag, editDescriptionTag)
            editTagPage.getMessageSuccessfully(function (actualMessage) {
                browser.assert.equal(actualMessage, messageTagUpdated);
            });
            editTagPage.goBackToTagPage();
            addTagPage.getColumnValueActual('Actual Title', editNameTag, function (actualTitle) {
                browser.assert.equal(actualTitle, editNameTag);
            });
            addTagPage.getColumnValueActual('Actual Slug', editNameTag, function (actualSlug) {
                browser.assert.equal(actualSlug, editSlugTag);
            });
            addTagPage.getColumnValueActual('Actual Description', editNameTag, function (actualDescription) {
                browser.assert.equal(actualDescription, editDescriptionTag);
            });
            addTagPage.goToAction('Delete', editNameTag);
            done();
        });
    }
};