 let amount=10000;
 if(amount>60000){console.log('buy iphone')}

 else if (amount>10000){console.log('buy android mobile')} 
 else if(amount>=5000&& amount<=10000){console.log('buy basic mobile')}
 else{console.log('no phone')}

// let x=0;

// while(x<10){
//     console.log(x)
// x++}

// do{console.log(x)
// x++
// }while(x<10)


// for in loop
const bio={name:'azim',age:21}

for(let x in bio){
console.log(x,bio[x])}


const color=['red','blue','green']

for (let i in color){

    console.log(color[i])}


list=['banana','apple','orange']
for (let i in list){console.log(list[i])}

for(let x of bio ){console.log(x)}

