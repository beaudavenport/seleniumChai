// Dependencies
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var until = webdriver.until;

var expect = require('chai').expect;

describe('asynchrony.com', function() {
  var driver;

  before(function(done) {
    this.timeout(30000);
    driver = new webdriver.Builder()
      .forBrowser('firefox')
      .build();
    driver.get('http://www.google.com/ncr').then(function() {
      done();
    });
  });

  describe('Check homepage', function() {
    it('should see the correct title', function(done) {
      driver.getTitle().then(function(title) {
        expect(title).to.have.string('Asynchrony Labs');
        done();
      });
    });
  });

  after(function(done) {
    driver.quit();
    done();
  });
});