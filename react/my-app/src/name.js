import { useState } from "react"
import { Button } from "react-bootstrap"
import {Call} from './input'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useNavigate, Link } from "react-router-dom";


function User(props){

  
   let [logindata,setlogindata]=useState({email:"",password:""})
  

let [user,setvalue]=useState([])

const navigate = useNavigate();

const del=(x)=>{

    let updatedlist=user.filter((y,m)=>x!=m+1)
    setvalue(updatedlist)
}

const checklogin=()=> {if(logindata.email=="azim@gmail.com"&&logindata.password==12345){
  
 props.setlogged(true)
 props.setusername(logindata.email)
 navigate("/test")


}


else{
alert("failed")

}}



return(

    
     <Container>
         
   <Table striped bordered hover size="sm">

 <tr>
  <th>order</th>
  <th>name</th>
  <th>delete</th>
</tr>


 {
user.map((x,i)=>
<tr>
<th>{i+1}</th>
<th>{x}</th>
<th>{<Button  variant="danger"onClick={()=>del(i+1)}>Delete</Button>}</th>
</tr>
)}

</Table>

<Call todo={user} setvalue={setvalue}/>


<input type="email" placeholder="email" onKeyUp={(e)=>setlogindata({...logindata,email:e.target.value})}/>
<input type="password" placeholder="password" onKeyUp={(e)=>setlogindata({...logindata,password:e.target.value})}/>

<Button onClick={()=>checklogin()}>submit </Button>

</Container>





)




}

export default User