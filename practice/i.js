
let user_details={}
let ed={}

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

   document.getElementById('display').innerHTML=JSON.stringify(user_details , undefined,2)
}




function add(key, id,list){
  
if(!user_details[key]){
user_details[key]=[]

}

user_details[key].push(document.getElementById(id).value)

 document.getElementById(id).value=""

display()

let html=''
for(i=0;i<user_details[key].length;i++){
html=html+` <tr id="${user_details[key][i]}">
<th scope="row">${user_details[key][i]}</th>
<th><button type="button" class="btn btn-outline-danger" onclick="del('${user_details[key][i]}','${key}','${user_details[key][i]}')">delete</button> </th>
</tr>`
}
document.getElementById(list).innerHTML=html
}

function del(a,key,id){
   let sk=[]
   for(i=0;i<user_details[key].length;i++){

      if(a!=user_details[key][i]){
sk.push(user_details[key][i])
      }

   }
   user_details[key]=sk
   console.log(user_details[key])
let x=document.getElementById(id)
x.remove()
display()
}







function education(a){
   

   ed[a.name]=a.value
  
}






function arrange(a){
   if(!user_details[a]){

      user_details[a]=[]

   }
   user_details[a].push(ed)
   ed={}

display()

const inputs = document.querySelectorAll('#a, #b,#c');

inputs.forEach(input => {
  input.value = '';
});
console.log('ed',user_details.educational_details)

 let h=''
for(i=0;i<user_details.educational_details.length;i++){
   
 h=h+` <tr id="${user_details[a][i]}">
<th>${user_details.educational_details[i].institution_name}</th>
<td>${user_details.educational_details[i].year}</td>
<td>${user_details.educational_details[i].percentage}</td>
<td><button type="button" class="btn btn-warning" onclick="rem('${user_details[a][i].institution_name}','${user_details[a][i]}')">delete</button></td>

</tr>`

}
document.getElementById('tab').innerHTML=h


}
function rem(key,id){

   ud=[]

for(i=0;i<user_details.educational_details.length;i++){
   if(key!=user_details.educational_details[i].institution_name){
      ud.push(user_details.educational_details[i])

   }

}
user_details.educational_details=ud

console.log(user_details.educational_details)

let x=document.getElementById(id)
x.remove()
display()
}