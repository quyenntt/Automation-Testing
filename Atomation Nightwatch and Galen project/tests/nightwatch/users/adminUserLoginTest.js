var loginPage, dashboardPage, username, password;
module.exports = {
    '@tags': ['login'],
    'Verify that admin can login with valid account': (browser) => {
        browser.perform(function (browser, done) {
            loginPage = browser.page.adminUserLoginPage();
            dashboardPage = browser.page.adminBasePage();
            username = browser.globals.userNames.username;
            password = browser.globals.userNames.password;
            loginPage.login(username, password);
            dashboardPage.isLogOutVisible(function (result) {
                browser.assert.equal(result, true);
            });
            dashboardPage.logout();
            done();
        });
    }
};