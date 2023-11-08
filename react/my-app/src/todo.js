import { useState } from "react"
import {Call} from './input'
import { Button, Container } from "react-bootstrap"
import Table from 'react-bootstrap/Table';

function Todo(props){


let [todos,setvalue]=useState([])


const del=(x)=>{

    let updatedlist=todos.filter((y,m)=>x!=m+1)
    setvalue(updatedlist)
}

return(
  
    
    <Container>
      
   <Table striped bordered hover size="sm">

 <tr>
  <th>order</th>
  <th>action</th>
  <th>delete</th>
</tr>


 {
todos.map((x,i)=>
<tr>
<th>{i+1}</th>
<th>{x}</th>
<th>{<Button variant="danger" onClick={()=>del(i+1)}>Delete</Button>}</th>
</tr>
)}

</Table>

<Call todo={todos} setvalue={setvalue}/>

</Container>


)




}

export default Todo