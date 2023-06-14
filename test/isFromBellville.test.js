describe('This tests my isFromBellville function' , function(){
    it("it should return true for reg numbers that starts with 'CY' when called" , function(){
        assert.equal(true, isFromBellville('CY15526','CY'), "This should be true");
    });

    it("it should return false for reg numbers does not starts with 'CY' when called" , function(){
        assert.equal(false, isFromBellville('TY15526','CY'), "This should be false");
    });

    it("it should return false for reg numbers does not starts with 'CY' when called" , function(){
        assert.equal(false, isFromBellville('ZM15526'), "This should be false");
    });

    it("it should return false for reg numbers does not starts with 'CY' when called" , function(){
        assert.equal(false, isFromBellville('CJ 123'), "This should be false");
    });

    it("it should return false for reg numbers does not starts with 'CY' when called" , function(){
        assert.equal(true, isFromBellville('CY 123'), "This should be false");
    });

});

