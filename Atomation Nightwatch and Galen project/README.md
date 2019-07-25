# **nightwatch**
## How to install Nightwatch.js framework demo jenkin
- Install npm *npm install npm -g*
- Install node.js *[1]*
- run npm init
- run npm install nightwatch –save
- run npm install iedriver
- run npm install geckodriver
- run npm install chromedriver
- run npm install @rpii/nightwatch-html-reporter

# **Galen**
## How it works ?
1- Galen uses Selenium with elements on page and getting their locations and dimensions

2- It opens a page in a browser, resizes the browser to a specific size, and tests the layout against user-defined specs.

3- Once it sees that something is wrong it’s report the error and makes a screenshot and highlights the misbehaviour element on it.
## How to install Galen framwork
 - Install npm install galenframework-cli *[2]*
 - Generate galen.config (run command line: galen config)
 - specs file for declaring objects (elements) and .test.js file are the test case

## Working command line with Jenkins
 - Test UI Media: run it on cmd * galen test tests/galen/media/media.test.js --htmlreport reports *

[1]: https://nodejs.org/en/download/current/
[2]: http://galenframework.com/docs/getting-started-install-galen/

