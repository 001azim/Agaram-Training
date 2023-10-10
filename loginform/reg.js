// let userdetails=[{email:"star.azim776@gmail.com",
//                   password:"12345",
//                   name:"azim"},
//                 {email:"ak123@gmail.com",
//                  password:"676776",
//                  name:"jk"}]


// localStorage.setItem("userdetails",JSON.stringify(userdetails));

function login(){
    let login_email=document.getElementById("email").value
    let login_password=document.getElementById("password").value
    let login_username=document.getElementById("username").value
    document.getElementById("welcome").style.display="block"
    // document.getElementById("loginform").style.display="none"
    userdetails=JSON.parse(localStorage.getItem("userdetails"))
    console.log(userdetails)
    for(var i=0;i<userdetails.length;i++){
        if(login_email==userdetails[i].email && login_password==userdetails[i].password){
                // alert("success")
                localStorage.setItem("loggedIn",true)
                login_username.innerText=`Welcome ${userdetails[i].name}`
                localStorage.setItem("Name",login_username.innerText)
                
            }
        }
document.getElementById("registry_input").style.display='none'
document.getElementById('call').style.display='block'
    }

function checklogin(){
    document.getElementById("welcome").style.display="block"
    document.getElementById("loginform").style.display="none"
    let login_username=document.getElementById("username")
    login_username.innerText=`${localStorage.getItem("Name")}`
    if(localStorage.getItem("loggedIn")){
        
        
    }
}

function logout(){
    document.getElementById("welcome").style.display='none'
    document.getElementById("loginform").style.display='block'
}

function register(){
    document.getElementById("registry_input").style.display="block"
    document.getElementById("loginform").style.display="none"
   
}
function signup(){
    let newid=document.getElementById("new_user").value;
    let newemail=document.getElementById("new_email").value;
    let newpass=document.getElementById("new_password").value;
    let userdetails=[]
    if(localStorage.getItem("userdetails")){
        userdetails=JSON.parse(localStorage.getItem("userdetails"))
    }
    userdetails.push({email:newemail,password:newpass,name:newid})
    localStorage.setItem('userdetails',JSON.stringify(userdetails))

    alert("You have registered your account succesfully")
    document.getElementById("loginform").style.display="block"
    document.getElementById("registry_input").style.display="none"
} 


function getname(){
 let get=JSON.parse(localStorage.getItem('userdetails'))
for (i=0;i<get.length;i++){
    console.log(get[i].name)
    document.getElementById('call').style.display='block'
}

}



function arrange(){
   
// document.getElementById('welcome').style.display='none'
// document.getElementById('loginform').style.display='none'
let change=JSON.parse(localStorage.getItem('userdetails'))
let htmldata=''
for(let i=0;i<change.length;i++){
   
    htmldata=htmldata+`<tr>
    <td>${change[i].name}</td>
    <td>${change[i].email}</td>
    <td><button type="button" onclick=" update('${change[i].email}')" >update</button></td>
    <td><button type="button" onclick="del('${change[i].email}')"> delete </button></td></tr>`
    
}
document.getElementById('tablebody').innerHTML=htmldata

}

function del(a){
    
let k=JSON.parse(localStorage.getItem('userdetails'))
let newlist=[]
for (i=0;i<k.length;i++){
    if(k[i].email!=a){
  
      
        newlist.push(k[i])}
}

localStorage.setItem('userdetails',JSON.stringify(newlist))

arrange()


}

    function call(){ alert('success')
        update()}



function update(){
    document.getElementById('update').style.display='block'
 let x=   document.getElementById('updatedname').value
   let y= document.getElementById('updatedemail').value
  let z=  document.getElementById('updatedpassword').value


 let update= JSON.parse(localStorage.getItem('usersetails'))
 for(i=0;i<update.length;i++){
    if(update[i].email==a){ 
        update[i].name=x
        update[i].email=y
        update[i].password=z



    }
   
 }
 JSON.stringify(localStorage.setItem('userdetails',update))
alert('done')
}
