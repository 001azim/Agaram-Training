
function login(){
   
 let x=document.getElementById('email').value
 let y=document.getElementById('password').value

 let details= JSON.parse(localStorage.getItem('details'))

 for( var i=0;i<details.length;i++){

    if(details[i].email==x && details[i].password==y){
      
      localStorage.setItem('loggedin',true)
     localStorage.setItem('name',details[i].name)
      window.location="home.html"
  
    }
 }
 

}
function checklogin(){
  if(localStorage.getItem('loggedin')){
let c=document.getElementById('welcome')

c.innerHTML=`welcome ${localStorage.getItem('name')}`

  }

  else{
    window.location="login.html"
  }
}




function x(){
  window.location="register.html"
  // register()
}

function register(){
   
   let a= document.getElementById('rname').value
   let b= document.getElementById('remail').value
   let z= document.getElementById('rpassword').value

let newdata=[]
if(localStorage.getItem('details')){
    
   newdata= JSON.parse(localStorage.getItem('details'))

}

newdata.push({name:a,email:b,password:z})
localStorage.setItem('details',JSON.stringify(newdata))
alert('registered successfully')

window.location="login.html"

}


function logout(){
  window.location="login.html"
  localStorage.removeItem('loggedin')
  // let b=prompt('hi','kio')
}

function viewdetails(){

  let h=''
  let list=JSON.parse(localStorage.getItem('details'))

for(i=0;i<list.length;i++){
  h=h+`<tr><td id="newname +'${i}'">${ list[i].name} </td>
  <td id="newpass +'${i}'">${ list[i].email} </td>
  <td><button type="button" onclick=" update('${list[i].email}')" >update</button></td> 
     <td><button type="button" onclick=" del('${list[i].email}')" >delete</button></td></tr>`
}
document.getElementById('table').innerHTML=h
document.getElementById('viewlist').style.display='block'
document.getElementById('edit').style.display="none"
// document.getElementById('welcome').innerHTML=`${list[i].name}`
}



function update(a){
    let r=JSON.parse(localStorage.getItem('details'))
   for (i=0;i<r.length;i++){
     if(a==r[i].email){
       let pname= prompt('name',`${r[i].name}`)
       let pemail=prompt('email', `${r[i].email}`)
   console.log(pemail)
       console.log(i)
   if(pemail !=r[i].email){
    document.getElementById(`newpass+'${i}'`).innerHTML=pemail
   
   } 
   if (pname!=r[i].name){
     document.getElementById(`newname+'${i}'`).innerHTML=pname
   }
   console
   }
   localStorage.setItem('details',JSON.stringify())
   }}
   
   
   
  function del(a){
      
    let k=JSON.parse(localStorage.getItem('details'))
    let newlist=[]
    for (i=0;i<k.length;i++){
        if(k[i].email!=a){
      
          
            newlist.push(k[i])}
    }
   
    localStorage.setItem('details',JSON.stringify(newlist))
  
  
    
  viewdetails()
  }
  
  
  
  
  