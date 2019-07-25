load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");

testOnAllDevices("Verify that the add media page displays all elements correctly", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;

    loginPage = new LoginPage(driver).waitForIt();
    loginPage.login('admin', '123456789');
    dashboardPage = new DashboardPage(driver);
    dashboardPage.goToNavigation();
    dashboardPage.goToPage("Add New Media");
    checkLayout(driver, "specs/media/mediaPage.gspec", device.tags);
});