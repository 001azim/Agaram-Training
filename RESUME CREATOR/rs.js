
resume_details={}
ed={}


function run(a,pd)
{
if(pd){
    if(resume_details[pd]){
resume_details[pd]= {...resume_details[pd]
    }

   }

   else{ resume_details[pd]={}
 }
 resume_details[pd][a.name]=a.value
   
}

else{resume_details[a.name]=a.value}

   display() 
}


function display(){ 
    document.getElementById('display').innerHTML=JSON.stringify(resume_details, undefined,2)
}




function show(key, id,lang){

if(!resume_details[key]){

   resume_details[key]=[]
  

 }

 resume_details[key].push(document.getElementById(id).value)
document.getElementById(id).value=""
display()

let h="";
for(i=0;i<resume_details[key].length; i++){

     h= h+`<tr id='${key[i]}' ><td>${resume_details[key][i]}</td>
     <td > <button type="button" class="btn btn-danger" onclick="del('${[i]}','${key}')">Delete</button></td>
     </tr>`
    
}
document.getElementById(lang).innerHTML=h
display() 
}

function del(ind,key){
  resume_details[key].splice(ind,1)
  console.log(resume_details[key])
let x=  document.getElementById(key[ind])
x.remove()
  display()
}



function add(a){
ed[a.name]=a.value

console.log(ed)

}


function arrange(a){

if(!resume_details[a]){
    resume_details[a]=[]
    var html=''

}

resume_details[a].push(ed)
 let x=   document.querySelectorAll('#x, #y,#z,#a')
    x.forEach(input => {
        input.value = '';
      });
    
    ed={}

    let h=''
    for (i=0;i<resume_details.education.length;i++){
      h=h+` <tr id='${resume_details.education[i]}'>
      <th scope="row">${resume_details.education[i].institution_name}</th>
      <td>${resume_details.education[i].degree}</td>
      <td>${resume_details.education[i].year}</td>
      <td>${resume_details.education[i].percentage}</td>
      <td><button type="button" class="btn btn-warning" onclick="remove('${[i]}','${resume_details.education[i]}')">delete</button></td>
    </tr>`
    }
document.getElementById('t_body').innerHTML=h
display()
}

function set(){
    
    $.ajax({type:'POST',
  url:'http://agaram.academy/api/action.php',
  
  data :
  {
    request :"create_resume",
    user :"azim",
    resume:resume_details
  },
  success:  function(done){
    console.log('list',JSON.parse(done))

  
    next()
    get()
  },
  error: function(error){
console.log(error)
  },
})

}



function next(){

    window.location="arrange.html"
}


function remove(a,id){
  // alert(id)

resume_details.education.splice(a)
console.log(resume_details.education)
let x=document.getElementById(id)
x.remove()
display()


}