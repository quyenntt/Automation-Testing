module.exports = {
    commands: [{
        addNewMedia(image) {
            this
                .setValue('@inputImage', require('path').resolve(__dirname + image))
                .click('@buttonUpload');
        },
        deleteImage() {
            this
                .moveToElement('@columnTitle', 0, 0)
                .click('@linkDeleteImage');
            this.api.acceptAlert();
        },
        getImageName(callback) {
            this.getContainText('@image', callback);
        },
    }],
    elements: {
        inputImage: 'input[id=async-upload]',
        buttonUpload: 'input[id=html-upload]',
        image: {
            selector: '//tr[1]/td/strong[@class="has-media-icon"]/a',
            locateStrategy: 'xpath'
        },
        columnTitle: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkDeleteImage: {
            selector: '//tr/td[1]/div[@class="row-actions"]/span[@class="delete"]/a[@class="submitdelete aria-button-if-js" and text()="Delete Permanently"]',
            locateStrategy: 'xpath'
        },
    }
}