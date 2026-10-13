var n          //abc
if(n){               //empty
    console.log(true)     //5
}else{                    //0
    console.log(false)    //no value  nan
}
var n=10/"abc"   
console.log(n)      
if(n){               
    console.log(true)     
}else{                    
    console.log(false)    
}


//object

var student={
    name:"Seetha",
    mark1: 450,
    mark2:300
}
console.log(student.name)
console.log(student.mark1)
console.log(student.mark2)

var empAr=[
    {id:100,name:"abc",salary:500000},
    {id:200,name:"def",salary:700000},
    {id:300,name:"del",salary:600000}
]

var empsal=empAr.filter(e=>{
    return e.salary>500000
})
console.log(empsal)


var student=[
    {rollno:101,name:"seetha",mark:80},
    {rollno:102,name:"harrini",mark:50},
    {rollno:103,name:"padhma",mark:20}
]
 var st=student.filter(s=>{
    return s.mark>40
 })
 console.log(st)

 var student=[
    {rollno:101,name:"seetha",mark:80,mark2:60},
    {rollno:102,name:"harrini",mark:50,mark2:30},
    {rollno:103,name:"padhma",mark:20,mark2:60}
]
 var st=student.filter(s=>{
    return s.mark>40 && s.mark2>30
 })
 console.log(st)


  mobileAr=[
    {id:100,name:"samsung",price:600000},
    {id:200,name:"oneplus",price:400000},
    {id:300,name:"moto",price:300000}
  ]
  mobileAr.forEach(m=>{
    console.log(`${m.id} ${m.name} ${m.price}`)
  })

 mobileAr=[
    {id:100,name:"samsung",price:600000},
    {id:200,name:"oneplus",price:400000},
    {id:300,name:"moto",price:300000}
  ] 
  var mbl=mobileAr.filter(m=>{
    return m.price>300000
  })
  console.log(mbl)

  laptopAr=[
    {id:100,name:"samsung",price:6000000},
    {id:200,name:"macbook",price:40000000},
    {id:300,name:"hp",price:300000}
  ] 
  var lpt=laptopAr.filter(l=>{
    return l.price>400000
  })
  console.log(lpt)

   laptopAr=[
    {id:100,name:"samsung",price:6000000},
    {id:200,name:"macbook",price:40000000},
    {id:300,name:"hp",price:300000}
  ]
  laptopAr.forEach(l=>{
    console.log(`${l.id} ${l.name} ${l.price}`)
  })

  laptopAr=[
    {id:100,name:"samsung",price:6000000},
    {id:200,name:"macbook",price:40000000},
    {id:300,name:"hp",price:300000}
  ]
  laptopAr.map(l=>l.price=l.price+10000)
  .forEach(l=>console.log(l))

  mobileAr=[
    {id:100,name:"samsung",price:600000},
    {id:200,name:"oneplus",price:400000},
    {id:300,name:"moto",price:300000}
  ]
  mobileAr.map(m=>m.price=m.price+10000)
  .forEach(m=>console.log(m))

  var empAr=[
    {id:100,name:"abc",salary:500000},
    {id:200,name:"def",salary:700000},
    {id:300,name:"del",salary:600000}
]
empAr.map(e=>e.salary=e.salary+10000)
.forEach(e=>console.log(e))


laptopAr=[
    {id:100,name:"samsung",price:6000000},
    {id:200,name:"macbook",price:40000000},
    {id:300,name:"hp",price:300000}
  ]

laptopAr
.filter(e=>e.price<400000)
.map(e=>e.price=e.price+10000)
.forEach(e=>console.log(e))


var empAr=[
    {id:100,name:"abc",salary:500000},
    {id:200,name:"def",salary:700000},
    {id:300,name:"del",salary:600000}
]
empAr.filter(e=>e.salary>30000)
.sort((m,n)=>{
  return m.salary-n.salary;
})
.forEach(e=>console.log(e))


class employee{    //class is a blueprint to create object
  
  constructor(id,name,salary){
    this.id=id
    this.name=name
    this.salary=salary
  }
  display(){
    console.log(`${this.id} ${this.name} ${this.salary}`)
  }
}
var emp=new employee(100,"abc",60000)
  emp.display()
  var emp=new employee(200,"def",80000)
  emp.display()

  class students{    //class is a blueprint to create object
  
  constructor(rollno,name,mark1,mark2){
    this.rollno=rollno
    this.name=name
    this.mark1=mark1
    this.mark2=mark2
  }
  totalMarks(){
    console.log(this.name)
    console.log(this.mark1+this.mark2)
  }
  
}
var stud=new students(100,"seetha",60,80)
stud.totalMarks();


var a=10;
var b=5;
try{
  if(b==0){
    throw new Error("invalid input");
  }
  c=a/b
  console.log(c)
}catch(e){
  console.log(e.message)
}finally{
  console.log("program over")
}

var findRectangleArea=(l,b)=>{
  try{
    if(l==0 || b==0){
      throw new Error("invalid input")
    }else{
      console.log(l*b)
    }
  }catch(e){
console.log(e.message);
}
finally{
  console.log("program over")
}
}

var areaOfCircle=(radius)=>{
  try{
  if(radius==0){
    throw new Error("invalid input");
  }
  var result=3.14*radius*radius;
  console.log(result)

}catch(e){
  console.log(e.message)
}finally{
  console.log("program over")
}
}



const m=10   //constant cannot be reinst,block scope
console.log(m)
 b=500    //let has block scope
var c=200   //var has function scope

function test(a){
  console.log(a)
}
test(10)
test(10,20)
test(10,20,30)

function test1(...a){  //rest parameter
  console.log(a)
}
test1(10)
test1(10,20)
test1(10,20,30)

function test(a,...b){
console.log(a)
console.log(b)
}
test(10,30,50)


function test(a){
  console.log(a)
}
test([10,20,30,40,50])

function test(a){
  console.log(a)
}
test(...[10,20,30,40])


let students1 = {
   rollno:100,
   name:"seetha",
   age:20.
}
let st1={...students1,mark1:90,mark2:80}
console.log(st1);

let findGrade=(marks=>{
  return new Promise((resolve,reject)=>{
    if(marks>=50){
      resolve("passed")
    }else{
      reject("failed")
    }
  })
})
findGrade(60)
.then(result=>console.log(result))
.catch(error=>console.log(error))


