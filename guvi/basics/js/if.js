let hour=new Date().getHours()

if (hour >= 0 && hour <= 13) { console.log('good morning') }

else if (hour >= 13 && hour <= 17) { console.log('good afternoon') }

else { console.log('good evening') }



function calculate(x){
if (x%4==0 && x%100!==0){console.log('leap year')}
else{ console.log('not a leap year')}}



calculate(x=new Date().getFullYear())


 let b=localStorage.getItem('name')
console.log(typeof(b))


// converting array in to string 
let list=['a','b','c']
let relist=JSON.stringify(list)
localStorage.setItem('alphabet',relist)

// get the array by converting string to array
let list_1=localStorage.getItem('alphabet')
let clist=JSON.parse(list_1)
console.log(clist[1])


localStorage.setItem(JSON.stringify('check',list))
localStorage.getItem(JSON.parse('check'))