
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

         h= h+`<tr><td>${resume_details[skill][i]}</td>
         <td> <button type="button" class="btn btn-danger" onclick="del('${resume_details[skill][i]}','${skill}','${skill_id}')">Delete</button></td>
         </tr>`
         
        
    }

  
   document.getElementById('list').innerHTML=h



}

function del(a,skill,skill_id){
   alert(a)
    let ud=[]
      
     for(i=0;i<resume_details.skill.length;i++){
        if(a!=resume_details.skill[i]){
            ud.push(resume_details.skill[i])

  resume_details.skill=ud
  // console.log('dert',ud)
  // document.getElementById('empty').value=""
        }

        
     }

    show(skill,skill_id)
     }
  

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

// var html=''
// for(i=0;i<resume_details[a].length;i++){
    
   
//     html=html+`<h3>${resume_details[a][i]}</h3>`
    
// }

// document.getElementById('edlist').innerHTML=JSON.stringify(html)

// display()


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
  },
  error: function(error){
console.log(error)
  },
})

}




function next(){

    window.location="arrange.html"
}