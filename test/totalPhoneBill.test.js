


describe('Test my total Phone Bill function' , function(){
   
    it("It should return 'R3.40' if string calls made and sms's sent is equal to 'call, sms'. " , function(){
        assert.equal("R3.40", totalPhoneBill('call, sms'), "This should be true");
    });
    it("It should return 'R7.45' if string calls made and sms's sent is equal to 'call, sms, call, sms, sms'. " , function(){
        assert.equal("R7.45", totalPhoneBill('call, sms, call, sms, sms'), "This should be true");
    });

    it("It should return 'R1.30' if string calls made and sms's sent is equal to 'sms, sms'. " , function(){
        assert.equal("R1.30", totalPhoneBill('sms, sms'), "This should be true");
    });
});