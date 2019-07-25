module.exports = {
    commands: [{
        addNewUser(username, email, firstName, lastName, website, password, role) {
            this
                .setValue('@inputUsername', username)
                .setValue('@inputEmail', email)
                .setValue('@inputFirstName', firstName)
                .setValue('@inputLastName', lastName)
                .setValue('@inputWebsite', website)
                .click('@buttonShowPassword')
                .clearValue('@inputPassword')
                .setValue('@inputPassword', password)
                .click('@inputConfirmPassword')
                .setValue('@selectRole', role)
                .click('@inputAddNewUser')
        }
    }],
    elements: {
        inputUsername: 'input[id=user_login]',
        inputEmail: 'input[id=email]',
        inputFirstName: 'input[id=first_name]',
        inputLastName: 'input[id=last_name]',
        inputWebsite: 'input[id=url]',
        buttonShowPassword: 'button.wp-generate-pw',
        inputPassword: '#pass1-text',
        inputSendNotification: 'input[id=send_user_notification]',
        selectRole: 'select[id=role]',
        inputAddNewUser: 'input[id=createusersub]',
        inputConfirmPassword: 'input[name=pw_weak]'
    }
}