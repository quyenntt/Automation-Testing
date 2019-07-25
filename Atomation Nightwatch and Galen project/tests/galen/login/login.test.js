load("../init.js");

testOnAllDevices("Verify that the login page displays all elements correctly", "/wp-login.php", function (driver, device) {
    checkLayout(driver, "specs/login/loginPage.gspec", device.tags);
});