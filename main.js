let a=30;
let b=10;
console.log(`${a} км ч соответствует ${a/3.6} мс `)
console.log(`${b} mc соответствует ${b*3.6} км ч `)


a=10;
b=5;
let c=12;
let P=a+b+c;

if ((a+b)>c && (a+c)>b && (c+b)>a){
    console.log('Exist')
    console.log(`Per= ${a+b+c}`)
    console.log(`Plosh= ${Math.sqrt(P*(P-a)*(P-b)*(P-c))}`)
    console.log(`Sootn= ${P/Math.sqrt(P*(P-a)*(P-b)*(P-c))}`)
}else{
    console.log('Not exist')
}


result = prompt("Write num",'');
if (isNaN(result)){
    alert("Это не цифра :( Попробуйте снова.")
}
for(let i=1;i<=result;i++){
    if(i%2==0){
        console.log(`${i} buzz`)
    }
    if(i%2!=0){
        console.log(`${i} fizz`)
    }
    if(i%5==0){
        console.log(`${i} fizz buzz`)
    }
}

for (let i=1;i<=10;i++){
    if((i%2)==0){
        console.log("#".repeat(i))
    }
    else{
        console.log("*".repeat(i))
    }
}
console.log("||");

/* let q=10;


result = prompt("Write num",'');
if (isNaN(result)){
            alert("Это не цифра :( Попробуйте снова.")
}
while(result!=q){
    if(result>q){
        console.log("Больше")
    }
    else{
        console.log("меньше")
    }
    result = prompt("Write num",'');

}

if((result==q)){
    console.log("угадано")
} */


let n=3;
let x=1;
let y=3;
if ((n%x)==0 && ((n%y)==0)){
    console.log(`n = ${n} , x = ${x} , y = ${y} => true`)
}
else{
    console.log(`n = ${n} , x = ${x} , y = ${y} => false`)
}

let mounth=5;
if (mounth<=3){
    console.log(`месяц ${mounth} => 1 квартал`)
}
if (mounth<=6 && mounth>3){
    console.log(`месяц ${mounth} => 2 квартал`)
}
if (mounth<=9 && mounth>6){
    console.log(`месяц ${mounth} => 3 квартал`)
}
if (mounth<=12 && mounth>9){
    console.log(`месяц ${mounth} => 4 квартал`)
}



