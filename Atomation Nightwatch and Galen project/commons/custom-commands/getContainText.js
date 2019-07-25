exports.command = function(selector, callback) {
    this.getText(selector, function (result) {
        callback(result.value);
    });
};