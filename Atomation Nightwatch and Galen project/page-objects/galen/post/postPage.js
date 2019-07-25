this.PostPage = $page("Post page", {
    dismissButton: ".nux-dot-tip__disable",

    dissmissTip: function () {
        this.dismissButton.click();
    }
});