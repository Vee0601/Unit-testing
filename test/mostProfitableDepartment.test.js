describe('Test my mostProfitableDepartment function' , function(){
    it("It should return 'outdoor' when the list is equal to 'salesData'. " , function(){
        assert.deepEqual("outdoor", mostProfitableDepartment(salesData), "This should be true");
    });

    it("It should return 'Thursday' when the list is equal to 'salesData'. " , function(){
        assert.deepEqual("Thursday", mostProfitableDay(salesData), "This should be true");
    });


    it("It should return 'electronics' when the list is equal to 'salesData2'. " , function(){
        assert.deepEqual("electronics", mostProfitableDepartment(salesData2), "This should be true");
    });

    it("It should return 'Wednesday' when the list is equal to 'salesData'. " , function(){
        assert.deepEqual("Wednesday", mostProfitableDay(salesData2), "This should be true");
    });


});