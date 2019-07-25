module.exports = {
    commands: [{
        editTag(tagName, slugName, description) {
            this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug', slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription', description)
                .click('@inputUpdate');
        },
        goBackToTagPage() {
            this.click('@linkBackToTag');
        },
        getMessageSuccessfully(callback) {
            this
                .waitForElementVisible('@labelMessageSuccessful')
                .getContainText('@labelMessageSuccessful', callback);
        },
    }],
    elements: {
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        inputEditDescription: 'textarea[id=description]',
        inputUpdate: 'input[type=submit]',
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text(),"Back to Tags")]',
            locateStrategy: 'xpath'
        },
        labelMessageSuccessful: 'div#message>p>strong',
    }
}