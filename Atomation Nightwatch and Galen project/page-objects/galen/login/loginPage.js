this.LoginPage = $page("Login page", {
  email: "input#user_login",
  password: "input#user_pass",
  submitButton: "input#wp-submit",

  login: function (username, password) {
    this.email.typeText(username);
    this.password.typeText(password);
    this.submitButton.click();
  }
});
