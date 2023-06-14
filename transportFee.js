function transportFee(shift){
    if(shift ==='nightshift'){
       return 'free';
    }
      else if(shift === 'morning'){
      return 'R20';
      }
      
     else if (shift === 'afternoon'){
     return 'R10';
     }
      else {
      return "Oops enter the correct shift";
      }
    
    }
    
   // console.log(transportFee('afternoon'))