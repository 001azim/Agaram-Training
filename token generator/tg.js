let user_details={}

function run(a){
user_details[a.name]=a.value
console.log(user_details)

}


function push(){
    
    $.ajax({
type:'POST',
url:'http://agaram.academy/api/action.php',

data :
{
request : "create_candidate",
name: user_details.name,
email : user_details.email,
password :user_details.password,
aadhar :user_details.aadhar,
address :user_details.address, 
phone:user_details.phone_number,
city: user_details.city,
area:user_details.area,
pin : user_details.pin,



},

success: function(list){
    console.log('fghj',list)
    
},

error: function(list){
    console.log(list)
    alert('fgh')
}



    })

}


function get(){

    $.ajax({

        type :'get',
        url:'http://agaram.academy/api/action.php',
        data :
        {
        request : "getAllMembers"
        },
        success: function (details){
           values=  JSON.parse(details)
console.log(values.data)

           let h=''
          for(i=0;i<values.data.length;i++){

h=h+` <tr>
<td class="table-warning">${values.data[i].id}</td>
<td class="table-danger">${values.data[i].name}</td>
<td class="table-info">${values.data[i].email}</td>
<td class="table-danger">${values.data[i].aadhar}</td>
<td class="table-info">${values.data[i].phone}</td>
<td class="table-warning">${values.data[i].address}</td>
<td class="table-secondary">${values.data[i].pin}</td>
</tr>`

          }
document.getElementById('tbody').innerHTML=h



        },
        error: function(error){
            console.log(error)
        },
    })
}

function page(){
    window.location="login.html"
}

function login(){
    
$.ajax({

    type: 'Post',
    url:'http://agaram.academy/api/action.php',
    data :
{
request : "candidate_login",
email : $('#lemail').val(),
password : $('#lpassword').val(),
},
success: function(detail){
    console.log('log',JSON.parse(detail))
},
error: function(error){
    console.log(error)
}

})

    
}
function next(){
    window.location="list.html"
}