describe('Test my findItemsOver function' , function(){
    it("It should return 'results' when the list is equal to 'itemList' with a threshold of 20. " , function(){
        assert.deepEqual(results, findItemsOver(itemList, 20), "This should be true");
    });

    it("It should return 'results2' when the list is equal to 'itemList2' with a threshold of 10. " , function(){
        assert.deepEqual(results2, findItemsOver(itemList2, 20), "This should be true");
    });

    it("It should return 'results2' when the list is equal to 'itemList2' with a threshold of 10. " , function(){
        assert.deepEqual(results3, findItemsOver(itemList3, 20), "This should be true");
    });
    
});
