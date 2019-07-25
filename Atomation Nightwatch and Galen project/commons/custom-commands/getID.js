exports.command = function (callback) {
    this.url(function (result) {
        var savedUrl = result.value;
        var partURL1 = savedUrl.split("=");
        var partURL2 = partURL1[1].split("&");
        var output = partURL2[0];
        callback(output);
    });
};