var domain = "192.168.189.70/wordpress";
var devices = {
    mobile: {
        deviceName: "mobile",
        size: "450x800",
        tags: ["mobile"]
    },
    tablet: {
        deviceName: "tablet",
        size: "600x800",
        tags: ["tablet"]
    },
    desktop: {
        deviceName: "desktop",
        size: "1100x800",
        tags: ["desktop"]
    }
};

var TEST_USER = {
    username: "admin",
    password: "123456789"
};

function openDriver(url, size) {
    var driver = createDriver(null, size);
    session.put("driver", driver);
    if (url != null) {
        if (url.indexOf("http://") != 0 && url.indexOf("https://") != 0) {
            url = "http://" + domain + url;
        }
        driver.get(url);
    }
    else {
        driver.get("http://" + domain);
    }
    return driver;
};

afterTest(function (test) {
    var driver = session.get("driver");
    if (driver != null) {
        if (test.isFailed()) {
            session.report().info("Screenshot").withAttachment("Screenshot", takeScreenshot(driver));
        }
        driver.quit();
    }
});

function _test(testNamePrefix, url, callback) {
    test(testNamePrefix + " on ${deviceName} device", function (device) {
        var driver = openDriver(url, device.size);
        callback.call(this, driver, device);
    });
};

function testOnAllDevices(testNamePrefix, url, callback) {
    forAll(devices, function () {
        _test(testNamePrefix, url, callback);
    });
};

function testOnDevice(device, testNamePrefix, url, callback) {
    forOnly({ device: device }, function () {
        _test(testNamePrefix, url, callback);
    });
};

(function (exports) {
    exports.devices = devices;
    exports.openDriver = openDriver;
    exports.testOnAllDevices = testOnAllDevices;
    exports.testOnDevice = testOnDevice;
    exports.TEST_USER = TEST_USER;
})(this);