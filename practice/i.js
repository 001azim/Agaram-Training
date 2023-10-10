
let user_details={}

function run(a, pd){
 

   if(pd){

      if(!user_details[pd]){
         user_details[pd]={}
         
      }
  
      user_details[pd][a.name]=a.value
   }
  else{ 
   user_details[a.name]=a.value
}

 
console.log(JSON.stringify(user_details))
display()
}


function display(){

   document.getElementById('display').innerHTML=JSON.stringify(user_details , undefined)
}




function add(a, b){
if(!user_details[a]){
user_details[a]=[]

}

user_details[a].push(document.getElementById(b).value)

 document.getElementById(b).value=""

display()



}