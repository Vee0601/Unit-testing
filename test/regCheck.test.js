

describe('Tests my regCheck function' , function(){
    it('should return True when vehicle regNo start string matches location' , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'), "This should be true");
    });

    it('should return False when vehicle regNo start string does not matches location' , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'), "This should be false");
    });

});