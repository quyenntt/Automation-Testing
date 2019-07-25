module.exports = {
    commands: [{
        clickNewMenuLink() {
            this.click('@linkCreateNewMenu');
        },
        addNewMenu(nameMenu) {
            this.clickNewMenuLink();
            this
                .setValue('@inputNameMenu', nameMenu)
                .click('@inputSaveMenu');
        },
        deleteMenu() {
            this
                .waitForElementVisible('@linkDeleteMenu')
                .click('@linkDeleteMenu')
                .api.acceptAlert();
        },
        getMenuName(callback) {
            this
                .waitForElementVisible('@selectMenu')
                .getContainValue('@inputNameMenu', callback);
        }
    }],
    elements: {
        linkCreateNewMenu: 'span[class=add-new-menu-action]>a',
        linkDeleteMenu: 'span[class=delete-action]>a',
        selectMenu: 'select[id=select-menu-to-edit]',
        inputNameMenu: 'input[id=menu-name]',
        inputSaveMenu: 'input[id=save_menu_header]'
    }
};