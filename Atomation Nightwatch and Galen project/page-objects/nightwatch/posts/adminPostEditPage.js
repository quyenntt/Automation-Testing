module.exports = {
  commands: [{
    editPost(title, content) {
      this
        .waitForElementVisible('@buttonDismiss')
        .click('@buttonDismiss')
        .waitForElementVisible('@inputTitle')
        .clearValue('@inputTitle')
        .setValue('@inputTitle', title)
        .clearValue('@inputDesciprtion')
        .setValue('@inputDesciprtion', content)
        .waitForElementVisible('@buttonUpdate')
        .click('@buttonUpdate')
    },
    getMessageSuccessfully(callback) {
      this
        .waitForElementVisible('@labelMessageSuccessful')
        .getContainText('@labelMessageSuccessful', callback);
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
            .waitForElementVisible('@inputDesciprtion')
            .getContainText('@inputDesciprtion', callback);
          break;
      }
    }
  }],
  elements: {
    inputTitle: 'textarea[id=post-title-0]',
    inputDesciprtion: 'textarea[class=editor-post-text-editor]',
    buttonUpdate: 'button.editor-post-publish-button',
    labelMessageSuccessful: 'div[class=components-notice__content]',
    buttonDismiss: 'button.nux-dot-tip__disable'
  }
}