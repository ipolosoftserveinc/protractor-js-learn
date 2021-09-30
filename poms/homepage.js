const {element, by} = require("protractor");

class Homepage {
    constructor() {}

    get firstField() {return element(by.model("first"));}
    get secondFiled() {return element(by.model("second"));}
    get buttonGo() {return element(by.css("[ng-click='doAddition()']"));}
    get result() {return element(by.cssContainingText(".ng-binding", "3"));}

    async enterFirstNumber(keys) {
        this.firstField.sendKeys(keys);
    }
}

module.exports = {Homepage};