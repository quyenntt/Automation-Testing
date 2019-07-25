module.exports = {
    commands: [
        {
            updateUserProfile(firstName, lastName, nickName, linkWebsite, userInfor) {
                this
                    .click('@checkboxSyntaxHightlight')
                    .click('@radioAdminColor')
                    .click('@checkboxCommentShortcut')
                    .click('@checkboxShowToolBar')
                    .clearValue('@inputEditFirstName')
                    .setValue('@inputEditFirstName', firstName)
                    .clearValue('@inputEditLastName')
                    .setValue('@inputEditLastName', lastName)
                    .clearValue('@inputEditNickName')
                    .setValue('@inputEditNickName', nickName)
                    .click('@comboboxDisplayName')
                    .clearValue('@inputEditWebsite')
                    .setValue('@inputEditWebsite', linkWebsite)
                    .clearValue('@inputEditDescription')
                    .setValue('@inputEditDescription', userInfor)
                    .click('@inputUpdateProfile');
            },
            getActualValue(type, callback) {
                switch (type) {
                    case "Actual First Name":
                        this
                            .waitForElementVisible('@inputEditFirstName')
                            .getContainValue('@inputEditFirstName', callback);
                        break;
                    case "Actual Last Name":
                        this
                            .waitForElementVisible('@inputEditLastName')
                            .getContainValue('@inputEditLastName', callback);
                        break;
                    case "Actual Nick Name":
                        this
                            .waitForElementVisible('@inputEditNickName')
                            .getContainValue('@inputEditNickName', callback);
                        break;
                    case "Actual Description":
                        this
                            .waitForElementVisible('@inputEditDescription')
                            .getContainValue('@inputEditDescription', callback);
                        break;
                    case "Actual Website":
                        this
                            .waitForElementVisible('@inputEditWebsite')
                            .getContainValue('@inputEditWebsite', callback);
                        break;
                }
            },
            getMessageSuccessfully(callback) {
                this
                    .waitForElementVisible('@labelMessageSuccessful')
                    .getContainText('@labelMessageSuccessful', callback);
            },
            getCheckboxSelected(type, selector, callback) {
                var self = this;
                self.api.element(type, selector, function (response) {
                    self.api.elementIdSelected(response.value.ELEMENT, function (result) {
                        if (result.value == true) {
                            callback(result.value);
                        }
                        else callback(result.value);
                    });
                });
            },
            isCheckboxesSelected(callback) {
                this.getCheckboxSelected('id', 'syntax_highlighting', callback);
                this.getCheckboxSelected('id', 'admin_color_fresh', callback);
                this.getCheckboxSelected('id', 'comment_shortcuts', callback);
                this.getCheckboxSelected('id', 'admin_bar_front', callback);
            },
            setDefaultCheckboxes() {
                var self = this;
                self.getCheckboxSelected('id', 'syntax_highlighting', function (result) {
                    if (result == true) {
                        self.click('@checkboxSyntaxHightlight');
                    }
                });
                self.getCheckboxSelected('id', 'comment_shortcuts', function (result) {
                    if (result == true) {
                        self.click('@checkboxCommentShortcut');
                    }
                });
                self.getCheckboxSelected('id', 'admin_bar_front', function (result) {
                    if (result == true) {
                        self.click('@checkboxShowToolBar');
                    }
                });
                self.click('@inputUpdateProfile');
            }
        }
    ],
    elements: {
        checkboxSyntaxHightlight: 'input[id=syntax_highlighting]',
        radioAdminColor: 'input[id=admin_color_fresh]',
        checkboxCommentShortcut: 'input[id=comment_shortcuts]',
        checkboxShowToolBar: 'input[id=admin_bar_front]',
        inputEditFirstName: 'input[id=first_name]',
        inputEditLastName: 'input[id=last_name]',
        inputEditNickName: 'input[id=nickname]',
        inputEditEmail: 'input[id=email]',
        inputEditWebsite: 'input[id=url]',
        inputEditDescription: 'textarea[id=description]',
        inputNewPassword: 'input[id=pass1-text]',
        inputUpdateProfile: 'input[id=submit]',
        comboboxDisplayName: {
            selector: '//select[@id="display_name"]/option[text()="admin"]',
            locateStrategy: 'xpath'
        },
        labelMessageSuccessful: {
            selector: '//div[@id="message"] // strong',
            locateStrategy: 'xpath'
        }
    }
}