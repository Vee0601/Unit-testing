function countAllPaarl(list){
    let listNew = list.split(',');
      var count = 0;
      for(let item of listNew){
      if(item.includes("CJ")){
             count++;
         }
      }
      return count
    }