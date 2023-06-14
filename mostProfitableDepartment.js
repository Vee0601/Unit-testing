var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];

var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];




function mostProfitableDepartment(list)
{
    var largestSales = 0;
    var department = "";

    let departmentalList = [];
    for(let dep of list)
    {
      if(!departmentalList.includes(dep["department"]))
      {
        departmentalList.push(dep["department"]);
      }
    }

   for(let depart of departmentalList)
   {
        let largestDepSales = 0;
        for(let dict of list)
        {
            if(dict["department"] == depart)
            {
              largestDepSales += dict["sales"];
            }
        }

        if(largestDepSales > largestSales)
        {
            largestSales = largestDepSales;
            department = depart;
         }
   } 
  return department;
}

function mostProfitableDay(list)
{
    var largestSales = 0;
    var department = "";

    let departmentalList = [];
    for(let dep of list)
    {
      if(!departmentalList.includes(dep["day"]))
      {
        departmentalList.push(dep["day"]);
      }
    }

   for(let depart of departmentalList)
   {
        let largestDepSales = 0;
        for(let dict of list)
        {
            if(dict["day"] == depart)
            {
              largestDepSales += dict["sales"];
            }
        }

        if(largestDepSales > largestSales)
        {
            largestSales = largestDepSales;
            department = depart;
         }
   } 
  return department;
}

//console.log(largestDepSales);