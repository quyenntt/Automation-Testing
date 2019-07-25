var nameTitle = 'Post: Where were you';
var description = 'When you were in trouble and you needed a hand I was always there.';
var updateDescription = 'I have some best friends their names are: Delia and Sofia.';
var dashboardPage, addPostPage, loginPage, username, password, editPostPage, postID, viewAllPostPage;
var expectedMessage = "Post published.\nView Post";
var expectedUpdateSuccessMessage = "Post updated.\nView Post";
module.exports = {
    tags: ['post'],
    before: (browser) => {
        loginPage = browser.page.adminUserLoginPage();
        addPostPage = browser.page.adminPostAddPage();
        dashboardPage = browser.page.adminBasePage();
        editPostPage = browser.page.adminPostEditPage();
        viewAllPostPage = browser.page.adminPostViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that admin can add a new post with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Post');
            addPostPage.addNewPost(nameTitle, description);
            addPostPage.getMessageSuccessfully(function (actualMesssage) {
                browser.assert.equal(actualMesssage, expectedMessage);
            });
            browser.getID(function (id) {
                postID = id;
            }).perform(function (browser, done) {
                dashboardPage.goToPage('Manage Post');
                viewAllPostPage.goToDetailPost(postID);
                editPostPage.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                editPostPage.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, description);
                });
                dashboardPage.goToPage('Manage Post');
                viewAllPostPage.goToAction('Delete', postID);
                done();
            });
            done();
        });
    },
    'Verify that admin can edit post with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Post');
            addPostPage.addNewPost(nameTitle, description);
            browser.getID(function (id) {
                postID = id;
            }).perform(function (browser, done) {
                dashboardPage.goToPage('Manage Post');
                viewAllPostPage.goToAction('Edit', postID);
                editPostPage.editPost('', updateDescription);
                editPostPage.getMessageSuccessfully(function (actualMesssage) {
                    browser.assert.equal(actualMesssage, expectedUpdateSuccessMessage);
                });
                dashboardPage.goToPage('Manage Post');
                viewAllPostPage.goToDetailPost(postID);
                editPostPage.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                editPostPage.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, updateDescription);
                });
                dashboardPage.goToPage('Manage Post');
                viewAllPostPage.goToAction('Delete', postID);
                done();
            });
            done();
        });
    }
};
