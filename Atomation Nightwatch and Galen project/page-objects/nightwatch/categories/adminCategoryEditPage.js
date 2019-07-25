module.exports = {
    commands: [{
        editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory) {
            this
                .getLocationInView('@inputUpdateCategory')
                .clearValue('@inputEditName')
                .clearValue('@inputEditSlug')
                .clearValue('@textareaEditDescription')
                .setValue('@inputEditName', nameEditCategory)
                .setValue('@inputEditSlug', slugEditCategory)
                .setValue('@selectEditParent', parentEditCategory)
                .setValue('@textareaEditDescription', descriptionEditCategory)
                .click('@inputUpdateCategory');
        },
        goBackToCategory() {
            this.click('@linkBackToCategories');
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
        selectEditParent: 'select[id=parent]',
        textareaEditDescription: 'textarea[id=description]',
        inputUpdateCategory: 'input[type=submit]',
        labelMessageSuccessful: '#message > p:nth-child(1) > strong',
        linkBackToCategories: '#message > p:nth-child(2) > a',
    }
}