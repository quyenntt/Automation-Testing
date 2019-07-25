const util = require("util");
var linkMainMenu = "//div[@class='wp-menu-name' and text()= '%s']";
var linkSubMenuPost = "//li[@id='menu-posts']//a[text()='%s']";
var linkSubMenuMedia = "//li[@id='menu-media']//a[text()='%s']";
var linkSubMenuPage = "//li[@id='menu-pages']//a[text()='%s']";
var linkSubMenuUser = "//li[@id='menu-users']//a[text()='%s']";
var linkSubMenuAppearance = "//li[@id='menu-appearance']//a[text()='%s']";
module.exports = {
    commands: [{
        selectMenu(mainMenu, subMenu) {
            this
                .click(mainMenu)
                .click(subMenu);
        },
        goToPage(pageName) {
            var formatPostMenu = util.format(linkMainMenu, 'Posts');
            var formatMediaMenu = util.format(linkMainMenu, 'Media');
            var formatPageMenu = util.format(linkMainMenu, 'Pages');
            var formatUserMenu = util.format(linkMainMenu, 'Users');
            var formatAppearanceMenu = util.format(linkMainMenu, 'Appearance');
            switch (pageName) {
                case "Add New Post":
                    this.selectMenu(formatPostMenu, util.format(linkSubMenuPost, 'Add New'));
                    break;
                case "Category":
                    this.selectMenu(formatPostMenu, util.format(linkSubMenuPost, 'Categories'));
                    break;
                case "Tag":
                    this.selectMenu(formatPostMenu, util.format(linkSubMenuPost, 'Tags'));
                    break;
                case "Manage Post":
                    this.selectMenu(formatPostMenu, util.format(linkSubMenuPost, 'All Posts'));
                    break;
                case "Add New Media":
                    this.selectMenu(formatMediaMenu, util.format(linkSubMenuMedia, 'Add New'));
                    break;
                case "Library":
                    this.selectMenu(formatMediaMenu, util.format(linkSubMenuMedia, 'Library'));
                    break;
                case "Manage Page":
                    this.selectMenu(formatPageMenu, util.format(linkSubMenuPage, 'All Pages'));
                    break;
                case "Add New Page":
                    this.selectMenu(formatPageMenu, util.format(linkSubMenuPage, 'Add New'));
                    break;
                case "Menu":
                    this.selectMenu(formatAppearanceMenu, util.format(linkSubMenuAppearance, 'Menus'));
                    break;
                case "Manage User":
                    this.selectMenu(formatUserMenu, util.format(linkSubMenuUser, 'All Users'));
                    break;
                case "Add New User":
                    this.selectMenu(formatUserMenu, util.format(linkSubMenuUser, 'Add New'));
                    break;
                case "Edit User Profile":
                    this.selectMenu(formatUserMenu, util.format(linkSubMenuUser, 'Your Profile'));
                    break;
            }
        },
        isLogOutVisible(callback) {
            this
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@linkLogOut')
                .isVisible('@linkLogOut', function (result) {
                    callback(result.value);
                });
        },
        logout() {
            this
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@linkLogOut')
                .click('@linkLogOut');
        }
    }],
    elements: {
        linkYourAccount: {
            selector: '//li[@id="wp-admin-bar-my-account"]/a/span[@class="display-name"]',
            locateStrategy: 'xpath'
        },
        linkLogOut: {
            selector: '//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"]',
            locateStrategy: 'xpath'
        },
    }
}