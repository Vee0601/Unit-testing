describe('Test my yearsAgo function' , function(){
    it("It should return 47 years if the number of years passed is 1976." , function(){
        assert.equal(47, yearsAgo(1976), "This should be true");
    });

    it("It should return 23 years if the number of years passed is 2000." , function(){
        assert.equal(23, yearsAgo(2000), "This should be true");
    });
});