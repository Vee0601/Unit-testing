//From a string to a list


function countRegNumber(list){
    let listNew = list.split(',');
    var count = 0;
    for(let item of listNew){
    count++;
    }
  return count
  }