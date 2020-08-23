var CreateBrand = require ("../js/createBrand");
var myObj = new CreateBrand();
var chai = require("chai");
var assert = chai.assert;
var sinon = require("sinon");


describe ("Test", function () {
    it("check array length", function(){
        assert.equal(myObj.listBrand.length,5);
    }),
    it("spy on click method.", function(){
        var spy = sinon.spy(myObj, "click");
        myObj.printBtn();
        sinon.assert.notCalled(spy);
    })
})
