

describe('Tests my regCount function' , function(){
    it('Total reg number is 3' , function(){
        assert.equal(('CA 182736,CY 523519,CJ 812328',3) , "3");
    });

    it('Total reg number is 2' , function(){
        assert.equal(('CA 182736,CY 523519', 2), "2");
    });

    it('Total reg number is 0' , function(){
        assert.equal((''), "");
    });

});