
// console.log("looping and functions page");
// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

// for (let i=1; i<=100; i++){
//     console.log(i);
// }
// let obj={
//     name:"Geethu",
//     roll:31,
//     branch:"csc"
// }
// for (const i in obj) {
//     const element = obj[i];

//     console.log(i);
//     console.log(obj[i]); 
//     console.log(i,obj[i]);  
// }
// for (const i of "hello") {
//     console.log(i);
// }
// let i=1;
// while(i<50){
//     console.log("hi");
//     i++;
// }

let i=1;
do{
    console.log(i);
    i++;
}while(i<=5);

let a=10;
let b=20;
let max=(a>b)?a:b;
console.log("Maximum number is:"+max);

let x="guava";
switch(x){
    case "Banana":
    console.log("This is a guava");
    break;
    case "Apple":
    console.log("This is a guava");
    break;
    default:
    console.log("I dont need any fruits");
}

for(let i=0; i<=100; i++){
    if(i % 8 == 0){
        console.log(i);
    }
}
function nice(name){
console.log("Hey " +name+" your are nice1");
console.log("Hey " +name+" your are nice2");
console.log("Hey " +name+" your are nice3");
console.log("Hey " +name+" your are nice4");
}
nice("geethu");
function sum(a,b){
    // 
    return a+b;
}
total=sum(2,3);
console.log(total);
function sum2(a,b,c=3){
    console.log(a+b+c);
}
sum2(1,2,3);
sum2(1,2);

const func1=()=>{
    console.log("I am an arrow fumction",)
}
func1("Hello");


// console.log("Hey bhaai, your are nice1");
// console.log("Hey bhaai, your are nice2");
// console.log("Hey bhaai,your are nice3");
// console.log("Hey bhaai, your are nice4");