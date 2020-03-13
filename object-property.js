const student=[

    {id:21, name:"sunny"},

    {id:22, name:"Fahim"},

    {id:23, name:"Rifat"},

    {id:24, name:"Shakib"}
];


var Name=[];

  for(var i=0; i<=3; i++)
   Name.push(student[i].name);

     for(var i=0; i<=3; i++) 
     console.log(Name[i]);

const Name=student.map(x=>x);

 console.log(Name);

const name=student.filter(x=> x.id>22);

const f=student.find(x=> x.id>21);


  console.log(name);

  console.log(f);

