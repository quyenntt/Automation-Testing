var randomString = require('../../../commons/utils/randomString.js');
var loginPage, dashboardPage, userManagePage, userPage, userAdmin, passwordAdmin;
var username = randomString('nightwatch.team1');
var email = randomString('nightwatch')+'@gmail.com';
var firstName = randomString('NightWatch');
var lastName = randomString('Team 1');
var password = 'Team1234';
var website = 'Team1234';
var role = 'Subscriber';
var name = firstName +' ' + lastName;
module.exports = {
    '@tags': ['add-user'],
    before: (browser) => {
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        userManagePage = browser.page.adminUserManagementPage();
        userPage = browser.page.adminAddUserPage();
        userAdmin = browser.globals.userNames.username;
        passwordAdmin = browser.globals.userNames.password;
        loginPage.login(userAdmin, passwordAdmin);
    },
    'Verify that admin can add a new user with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New User');
            userPage.addNewUser(username, email, firstName, lastName, website, password, role);
            userManagePage.getColumnValueActual('Actual Username', username, function (actualUserName) {
                browser.assert.equal(actualUserName, username);
            });
            userManagePage.getColumnValueActual('Actual Name', username, function (actualName) {
                browser.assert.equal(actualName, name);
            });
            userManagePage.getColumnValueActual('Actual Email', username, function (actualEmail) {
                browser.assert.equal(actualEmail, email);
            });
            userManagePage.getColumnValueActual('Actual Role', username, function (actualRole) {
                browser.assert.equal(actualRole, role);
            });
            dashboardPage.logout();
            loginPage.login(username, password);
            dashboardPage.isLogOutVisible(function (result) {
                browser.assert.equal(result, true);
            });
            dashboardPage.logout();
            loginPage.login(userAdmin, passwordAdmin);
            dashboardPage.goToPage('Manage User');
            userManagePage.deleteUser(username);
            dashboardPage.logout();
            done();
        });
    },
}