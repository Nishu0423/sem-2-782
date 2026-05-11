let numbers=[1,2,3,4,5]
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
let mixedarray=[1,"hello",true,{name :"alice"},[1,2,3]]
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let square=x =>x*x;
console.log(square(4));
const greetUser = (name) => {
    console.log('hello , ${name}!');
}
greetUser ("alice");
let sum =[1,2,3,4,5];
let total=sum.reduce(( accumulator,CurrentValue,0)=>accumulator+CurrentValue,0)
console.log(total);
let students =[{name :"ALICE",marks:85},{name :"LICE",marks:99},{name:"ALI",marks:57}]


