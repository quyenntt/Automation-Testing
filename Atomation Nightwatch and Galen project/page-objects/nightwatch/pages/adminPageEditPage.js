module.exports = {
    commands: [{
        editPage(title, content) {
            this
                .waitForElementVisible('@buttonDismiss')
                .click('@buttonDismiss')
                .waitForElementVisible('@inputTitle')
                .clearValue('@inputTitle')
                .setValue('@inputTitle', title)
                .clearValue('@inputDescription')
                .setValue('@inputDescription', content)
                .waitForElementVisible('@buttonUpdate')
                .click('@buttonUpdate')
                .waitForElementVisible('@labelMessageSuccessful');
        },
        getMessageSuccessfully(callback) {
            this.getContainText('@labelMessageSuccessful', callback);
        },
        getColumActual(type, callback) {
            switch (type) {
                case 'Actual Title':
                    this
                        .waitForElementVisible('@inputTitle')
                        .getContainText('@inputTitle', callback);
                    break;
                case 'Actual Description':
                    this
                        .waitForElementVisible('@inputDescription')
                        .getContainText('@inputDescription', callback);
                    break;
            }
        }
    }],
    elements: {
        inputTitle: 'textarea[id=post-title-0]',
        inputDescription: 'textarea[class=editor-post-text-editor]',
        buttonUpdate: 'button.editor-post-publish-button',
        labelMessageSuccessful: 'div[class=components-notice__content]',
        buttonDismiss: 'button.nux-dot-tip__disable'
    }
}