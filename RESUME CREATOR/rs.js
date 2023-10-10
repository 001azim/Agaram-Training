
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




function show(skill, skill_id){

if(!resume_details[skill]){

   resume_details[skill]=[]
  

 }
//  if(skill){
//     ed
//  }
 resume_details[skill].push(document.getElementById(skill_id).value)
document.getElementById(skill_id).value=""
display()

    let h="";
    for(i=0;i<resume_details[skill].length; i++){

         h= h+`<div id="lim"> <h5>${resume_details[skill][i]}</h5><button type="button" class="btn btn-primary" onclick="del('${resume_details.skill[i]}')">
         delete <span class="badge text-bg-secondary"></span>
       </button></div>`
    }

  
   document.getElementById('list').innerHTML=h



}

// function del(a){
   
//     let ud=[]
      
//      for(i=0;i<resume_details.skill.length;i++){
//         if(a!=resume_details.skill[i]){
//             ud.push(resume_details.skill[i])


//         }

//         break
//      }
  
//      x=document.getElementById('lim').value
// console.log(x)

//      }
  

//      function delet(c){

// resume_details.skill.splice(c)

// remove(document.getElementById('li'))
//      }


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

var html=''
for(i=0;i<resume_details[a].length;i++){
    
   
    html=html+`<h3>${resume_details[a][i]}</h3>`
    
}

document.getElementById('edlist').innerHTML=JSON.stringify(html)

display()


}

function set(){
    
    $.ajax({type:'POST',
  url:'http://agaram.academy/api/action.php',
  
  data :
{
request :"create_resume",
user :"azim",
resume:{resume_details
}},
  success:  function(done){
    console.log('list',done)
alert('object assigned')
    
  },
  error: function(error){
console.log(error)
  },
})
}




function next(){

    window.location="arrange.html"
}