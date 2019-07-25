const randomString = (string) => {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    return string + Math.random().toString(36).substr(2, charactersLength);
}
module.exports = randomString;