const {browser} = require('protractor');
const {Homepage} = require('../poms/homepage');

const homepage = new Homepage();

describe("Demo calculator tests", () => {
   it("Should have a title", async () => {
      await browser.get("http://juliemr.github.io/protractor-demo/");

      await homepage.enterFirstNumber("1");
      await homepage.secondFiled.sendKeys("2");
      await homepage.buttonGo.click();

      expect(await homepage.result.getText()).toEqual("3");

      browser.sleep(2000);
   });
});
