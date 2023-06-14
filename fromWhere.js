function fromWhere(reg_num){
    if(reg_num.includes ("CY")){
    return "Bellville";
    }
      else if (reg_num.includes("CJ")){
               return "Paarl";
      }
        else if (reg_num.includes("CA"))
      {
      return "Cape Town";
      }
      else if(reg_num.includes("ZN")) {
      return "Some other place!";
      }
      else {
      return "You don't know your registration number ? Dumb-Ass";
      }
    } 
    
   // console.log(fromWhere("trfay25521"));