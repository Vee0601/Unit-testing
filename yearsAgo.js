function yearsAgo(year){
    const current_year = new Date().getFullYear();
     return current_year - year;
   }

console.log(yearsAgo(1978));
console.log(yearsAgo(2000));