// let userdetails=[{name:'azim',email:'star.azim776@gmail.com',password:12345}]

// localStorage.setItem('details',JSON.stringify(userdetails))















const firebaseConfig = {
  apiKey: "AIzaSyDRRUhi8nwqP7UrcSb7rtp5pPSz4K94wn4",
  authDomain: "register-form-db8a1.firebaseapp.com",
  databaseURL: "https://register-form-db8a1-default-rtdb.firebaseio.com",
  projectId: "register-form-db8a1",
  storageBucket: "register-form-db8a1.appspot.com",
  messagingSenderId: "52978911815",
  appId: "1:52978911815:web:0db54305abdaa094aabf62"
};
firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var dataRef = db.ref("registeredUsers");
console.log(db)

function regi(){
  console.log('register function called');
  let reg_name=document.getElementById("rname").value
  let reg_email=document.getElementById("remail").value
  let reg_password=document.getElementById("rpassword").value
console.log('hi')
  let reg_data = {
          name : reg_name,
          email : reg_email,
          password : reg_password,
  }

  dataRef.once('value')
      .then(function(snapshot) {
          let data = snapshot.val();
          console.log(data);
          if(data){
              data.push(reg_data);
              db.ref("registeredUsers").set(data);
          }
          else{
              db.ref(`registeredUsers/${0}`).set(reg_data);
          }
      })
      window.location="login.html"
      alert ('uesr registered')
}

function login(){

  let user_detail=document.getElementById("email").value
  let Password=document.getElementById("password").value
      dataRef.once('value')
      .then(function(snapshot) {
          let data = snapshot.val();
          console.log(data);
          if(data){
              for(i=0;i<data.length;i++){

                  if ((data[i].email==user_detail) && (data[i].password==Password))
                  {
                      alert("login successfully")

                      window.location="home.html";
                      break;
                  }
                  else {
                      alert(`class="alert alert-warning" role="alert">
                      please register first
                    `);                
                  }
                
              }
             
          }
      })




    //  document.getElementById('welcome').innerHTML= 
}
function x(){
  window.location="register.html"
  // register()
}

// let alldata=''
// function getitem(){
// dataRef.once('value').then(function)

// }


function viewdetails(){
 
  let h=''

  dataRef.once('value').then(function(snapshot){

let x=snapshot.val()
console.log(x)

for ( i=0;i<x.length;i++){
  console.log('loop')
  h=h+`<tr>
  <td >  ${x[i].name}</td>
  <td class="btn btn-link">${x[i].email}</td> 
  <td> <button type="button"  onclick="update('${x[i].email}')" class="btn btn-success"> update</button>  </td>
  <td> <button type="button" onclick="del('${x[i].email}')" class="btn btn-danger"> delete</button></td>
  </tr>`
 

}
document.getElementById('table').innerHTML=h
  })
  document.getElementById('viewlist').style.display="block"
}



function del(mail){
 
  dataRef.once('value').then(function(run){
  let x=run.val()
let nlist=[]

  for(i=0;i<x.length;i++){
    if(mail!=x[i].email){
  nlist.push(x[i])

    }
  }
  db.ref('registeredUsers').set(nlist)
  viewdetails()
  } )
 
  
  
  }
  
function logout(){
  window.location="login.html"
}



// let wlist=''

// function getitem(){
//   dataRef.once('value').then(function(save){
//     wlist= save.val()

//   })
// }

function update(a){

let c=prompt('enter name ')
let d=prompt('enter email')


}


firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
// const db= firebase.firestore()



function register( ){
  
alert('wr')

  let email=document.getElementById("remail").value
  let password=document.getElementById("rpassword").value

  
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


