describe('Test my findItemsOver20 function' , function(){
    it("It should return 'aryList' when the list is equal to itemList. " , function(){
        assert.deepEqual(results, findItemsOver20(itemList), "This should be true");
    });

    it("It should return 'results2' when the list is equal to itemList2. " , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2), "This should be true");
    });

    it("It should return 'results3' when the list is equal to 'itemList3'." , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3), "This should be true");
    });
    
});