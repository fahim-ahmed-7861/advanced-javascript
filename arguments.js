function sum()
{
    var ara=[...arguments];

   var sum=0;

   for(var i=0; i<ara.length; i++)
   sum+=ara[i];

   console.log(sum);

  
}

sum(4,34,5,543,534,534,5);