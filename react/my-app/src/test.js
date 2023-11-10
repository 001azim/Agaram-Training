import { Outlet, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Button, Container } from "react-bootstrap"
import { useState,useEffec} from "react"
import User from './name';
 function Test(props){


  let [jdata,jsetdata]=useState([])
//   const run=()=>{
//     axios({
//       method: 'get',
//       url: 'http://agaram.academy/api/action.php',
//       data :{
// request : 'getAllMembers',
// }
     
//     }).then (function(response){
// console.log(response)t
// // jsetdata(response.data)
//     })
//     ;}


   
return(

<Container>
<Table striped bordered hover solid >
  
<tr> 
  <td  colSpan={3}> number</td>
  <td  colSpan={3}> userid</td>
  <td colSpan={3}> id</td>
  <td colSpan={3}> title</td>
  </tr>

{/* {jdata.map((x,i)=><tr>
  <td colSpan={3}>{i+1}</td>
  <td colSpan={3}>{x.userId}</td>
  <td colSpan={3}>{x.id}</td>
  <td colSpan={3}>{x.title}</td>
</tr>)} */}

</Table>
<h1>{props.islogged?"welcome":"error"}</h1>


<h1>{props.username}</h1>
{/* <Button onClick={()=>run()}>get name </Button> */}
<nav>
<ul>
  <li>
    <Link to={`/home`}>home page</Link>
  </li>
  <li>
    <Link to={`/`}>user</Link>
  </li>
</ul>

</nav>

</Container>


)


}

export default Test