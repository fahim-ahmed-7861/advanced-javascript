var ara=[2,3,4,5,32];



ara.map(function sq(element,index,ara)
{
  console.log(element,index,ara);
});

const res=ara.map(function square(element)
{
  return element*element;
});

console.log(res);


const sq=Element=>Element*Element;


 const res=ara.map(sq);
console.log(res);

const res=ara.map(x=>x*x);

console.log(res);

const res=ara.filter(x=> x>5);

console.log(res);

const f=ara.find(x=>x>2);

console.log(f);

