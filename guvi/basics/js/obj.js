dic={name:'azim',age:21,degree:'be'}

console.log(dic['age'])



function login(a){

    if (a<10){return a}
else {return a*10}}
    
    
 console.log(login(19))
 
 
function date(time){
if (time%4==0&& time%100!==0){console.log('leap year')}
else{console.log('not a leap year')}}

date(new Date().getFullYear())



let mark=34;


switch(true){
    case mark >=90:
        console.log('good')
        break

 case mark <=45 && mark>=35:
    console.log('just pass')
break

 case mark <35:
 console.log('fail')
 break

    default:
        console.log('enter correct mark')
}

given="*"
function plus (a,b){let add= a+b
    let sub=a-b
    let mul=a*b
    if (given=="+"){   return add }
    else if(given=="-"){return sub}
    else if(given=="*"){return mul}
}
console.log(plus(10,9))

let feespaid=false


switch(feespaid){
    case true:
        console.log('logged in')
        break
        case false:
            console.log('feesnot paid')
}

const di ={name:'azim',age:21}
for (let i in di){console.log(i,dic[i])}