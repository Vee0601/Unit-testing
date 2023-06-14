describe('Tests my isWeekday function' , function(){

    it('should return True when day does not equal to Saturday and Sunday ' , function(){
        assert.equal((isWeekday('Monday'), 'true'), "true");
    });


    it('Monday true' , function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it('Tuesday: true ' , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('Wednesday: true ' , function(){
        assert.equal(isWeekday('Wednesday'), true);
    });

    it('Thursday:true ' , function(){
        assert.equal(isWeekday('Thursday'), true);
    });

    it('Friday:true ' , function(){
        assert.equal(isWeekday('Friday'), true);
    });

    it('Saturday:false ' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('Sunday:false ' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });

});



