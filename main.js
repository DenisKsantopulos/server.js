// ####### 1

let a=36;
let b=10;
function convertSpeed(a,b){
    if (b==1){
        return a/3.6;
    }
    else{
        return a*3.6;
    }
}
let c=convertSpeed(a,b);

console.log(`36  -> ${c}`)

//####### 2

function absValue(n){
    if(n<0){
        return n*(-1)
    }
    else{
        return n;
    }
}
console.log(absValue(-10)
)

//######## 3

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };
console.log(`Свойства ${Object.keys(student)}`)
console.log(`Студент ${student.last_name} ${student.first_name} учится в ${student.group} группе`)

//######## 4

function rand(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(rand(10,20))

// ######## 5

function mass(arr,n){
    let ar=[];
    for (let i=0;i<=n;i++){
        r=rand(0,arr.length-1);
        ar[i]=arr[r];
    }
    return ar;
}

console.log(mass([1,"a","b",2,3,"c"],2))
