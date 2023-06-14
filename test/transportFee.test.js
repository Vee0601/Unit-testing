describe('Test my transportFee function' , function(){
    it("It should return R20 if the employee took a morning shift." , function(){
        assert.equal("R20", transportFee('morning'), "This should be true");
    });

    it("It should return R10 if the employee took an afternoon shift." , function(){
        assert.equal("R10", transportFee('afternoon'), "This should be true");
    });

    it("It should return Free if the employee took a night shift." , function(){
        assert.equal("free", transportFee('nightshift'), "This should be true");
    });
});