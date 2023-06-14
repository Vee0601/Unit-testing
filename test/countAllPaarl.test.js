describe('Test my countAllPaarl function' , function(){
    it("It should return 3 if there are 3 Paarl registration numbers in a string." , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), "This should be true");
    });

    it("It should return 2 if there are 2 Paarl registration numbers in a string." , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'), "This should be true");
        
    });

    it("It should return 2 if there are 2 Paarl registration numbers in a string." , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        
    });

    it("It should return 2 if there are 2 Paarl registration numbers in a string." , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
        
    });
        
});