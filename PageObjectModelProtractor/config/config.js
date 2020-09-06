var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
 seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['..//testcases//teststudent.js'],

  
onPrepare: function() {
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports/screenshots'
    }).getJasmine2Reporter());
}
};