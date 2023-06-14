function countAllFromTown(list, code){
    let listNew = list.split(',');
      var count = 0;
      for(let item of listNew){
        if(item.includes(code)){
        count++
        }
      }
      return count;
    } 