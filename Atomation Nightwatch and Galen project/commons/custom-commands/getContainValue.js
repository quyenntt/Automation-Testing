exports.command = function(selector, callback) {
    this.getValue(selector, function (result) {
        callback(result.value);
    });
};