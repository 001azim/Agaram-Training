
import './App.css';
import Prc from './prc'
import {useState} from 'react'


function App() {


  const del=(x)=>{
   let uplist=todo.filter((y,m)=>x!=m+1)
   run(uplist)

  
  }
 
  let [val,fun] = useState('')
  let [todo,run] = useState([])

  return (
    
    <div className="App">
      <header className="App-header">
<>
<table border="solid 3px white">
<tr>
<th> order</th>
<th>action</th>
<th>delete</th>
</tr>

{todo.map((x,i)=>
<tr>
<th>{i+1}</th>
<th> {x}</th>
<th>{<button onClick={()=>del(i+1)}> delete</button>}</th>
</tr>)}

</table>

     
    <input type="text" onClick={(e)=>fun(e.target.value)}/>
    <button onClick={()=>run([...todo,...val])}> add</button>

    {todo} 
    </>    
        {/* <Prc name="mohamed"/> */}
   
      </header>
    </div>
   
  );
}

export default App;
