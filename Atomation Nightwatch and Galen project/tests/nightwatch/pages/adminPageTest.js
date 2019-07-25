var nameTitle = 'Hello summer';
var expectedMessage = 'Page published.\nView Page';
var description = 'I like swimming on the beach.';
var updateDescription = 'I often go to the beach on the weekend';
var expectedUpdateSuccessMessage = 'Page updated.\nView Page';
var dashboardPage, viewAllPage, addPage, loginPage, editPage, username, password, pageID;
module.exports = {
    '@tags': ['page'],
    before: (browser) => {
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        addPage = browser.page.adminPageAddPage();
        editPage = browser.page.adminPageEditPage();
        viewAllPage = browser.page.adminPageViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that admin can add a new page with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Page');
            addPage.addNewPage(nameTitle, description);
            addPage.getMessageSuccessfully(function (actualMessage) {
                browser.assert.equal(actualMessage, expectedMessage);
            });
            browser.getID(function (id) {
                pageID = id;
            }).perform(function (browser, done) {
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToDetailPage(pageID);
                editPage.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                editPage.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, description);
                });
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToAction('Delete', pageID);
                done();
            });
            done();
        });
    },
    'Verify that admin can edit page with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Page');
            addPage.addNewPage(nameTitle, description);
            browser.getID(function (id) {
                pageID = id;
            }).perform(function (browser, done) {
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToAction('Edit', pageID);
                editPage.editPage('', updateDescription);
                editPage.getMessageSuccessfully(function (actualMesssage) {
                    browser.assert.equal(actualMesssage, expectedUpdateSuccessMessage);
                });
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToDetailPage(pageID);
                editPage.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                editPage.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, updateDescription);
                });
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToAction('Delete', pageID);
                done();
            });
            done();
        });
    }
};