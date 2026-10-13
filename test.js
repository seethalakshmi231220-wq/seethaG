console.log("Hello World")
var a=100
var b=200

var c=a+b
var d=a-b
var e=a*b
var f=a/b

console.log(c)
console.log(d)
console.log(e)
console.log(f)

console.log(a>b)
console.log(a>b)
console.log(a=b)
console.log(a<=b)
console.log(a>=b)
console.log(a!=b)

var aa=100
var bb="hello"
var cc=true
var dd={name:'abc'}

console.log(typeof(aa))
console.log(typeof(bb))
console.log(typeof(cc))
console.log(typeof(dd))
console.log(typeof(ee))

var ee=function (){}
var ff=[1,2,3]

console.log(typeof(ee))
console.log(typeof(ff))

if(a>b){
    console.log("a is greater")
} else{
    console.log("b is greater")
}

var m=7
var n=5
if(m>n){
    console.log("m is grater")
}else{
    console.log("n is greater")
}
//logical operator
//&& and
//|| or
//! not

var x=true
var y=false

console.log(x&&y)
console.log(x||y)
console.log(!x)

var week=1
switch(week){
    case 1:console.log("monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    case 4:console.log("thursday");break;
    default:console.log("no match");
}

var month=1
switch(month){
    case 1:console.log("jan");break;
    case 2:console.log("feb");break;
    case 3:console.log("mar");break;
    case 4:console.log("april");break;
    case 5:console.log("may");break;
    case 6:console.log("jun");break;
    case 7:console.log("july");break;
    default:console.log("no match");
}

var k=5
var i=0
while(i<k){

    console.log(i)
    i=i+1
}
var k=5
var i=1
var sum=0
while(i<=k){

    sum=sum+i;
    i=i+1
}
console.log(sum);

var k=5
var i=1
var prod=1
while(i<=k){
    prod=prod*i

    i=i+1
}
console.log(prod);

var k=5
var i=1
while(i<=k){
    k=k-1
    console.log(k)
}

//for loop
for(i=0;i<=5;i++){
    console.log(i);
}

var sum=0

for(i=0;i<=5;i++){
    sum=sum+i
}
console.log(sum);

var sum=0
var prod=1

for(i=1;i<=5;i++){
    sum=sum+i //sum=1
    prod*=i //prod=prod*i
}
console.log(sum);
console.log(prod);
//even number
for(i=1;i<=10;i++){

}
console.log(sum);
console.log(prod);






function hello(){
    console.log("hello world")
}
hello();

function hello(a,b){
    console.log(a*b)
}
hello(10,20)

function hello(a,b,c){
    console.log(a*b*c)
}
hello(10,20,30)

function hello(a){
    if(a%2==0){
        console.log(a,"is even")
    }else{
         console.log(a,"is odd")
    }
}

function hello(a,b){
    console.log(a*b)
}
hello(10,20)


 
var a=function(a){
 var k=a[0]
 a[0]=a[a.length-1]
 a[a.length-1]=k;

 return a;
}
var result=a([1,2,3,4,5])
console.log(result)



var a=(a)=>{  //arrow function
    console.log(a*a);
}
a(10);

var a=(a,b)=>{  //arrow function
    console.log(a*b);
}
a(10,5);


var a=(a)=>{
    var sum=0;
    for(let s of a){
        sum+=s;

    }
    return sum;
}
var result=a([10,5,15,20])
console.log(result);

var a=(a)=>{
    var sum=0;
    for(let s of a){
    if(s%2==0){
        sum+=s;
    }
    }
    return sum;
}
var result=a([10,5,15,20])
console.log(result);


var a1=a=>{
    var ar=[];
    for(let s of a){
    if(s>=0){
        ar.push(s);
    }
    }
    return ar;
}
var result=a([10,5,15,20])
console.log(result);

var areaOfRect=(len,breadth)=>{
    return len*breadth;
}

var area=areaOfRect(10,5);
console.log(area);

var ar=[1,2,3,4,5,6,7,8]
ar.forEach(e=>console.log(e));

