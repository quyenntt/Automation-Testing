load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");
load("../../../page-objects/galen/post/postPage.js");

testOnAllDevices("Verify that the add post page displays all elements correctly", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;
    var postPage = null;

    loginPage = new LoginPage(driver).waitForIt();
    loginPage.login('admin', '123456789');
    dashboardPage = new DashboardPage(driver);
    dashboardPage.goToNavigation();
    dashboardPage.goToPage('Add New Post');
    postPage = new PostPage(driver).waitForIt();
    postPage.dissmissTip();
    checkLayout(driver, "specs/post/postPage.gspec", device.tags);
});