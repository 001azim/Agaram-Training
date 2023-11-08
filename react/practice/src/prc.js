import { useState } from "react"

function Prc(props){

   
    let a=['azim','afdfghj','fdghj']
    let b=[1,2,3,45,5,6]
    let c=[b,a]
let d=[c,'wae']
    let [vari,ac]=useState("")
    return(

     <>
       
        {d}
        <h1>{props.name}</h1>
<h2>{props.name}</h2>




<button type="button" onClick={()=>ac(a)}>test</button>
{vari}
{/* {vari.map((x)=><h1>{x}</h1>)} */}
{/* {vari.map((v)=><h1>{v}</h1>)} */}
{/* {vari.map((x)=><h1>{x}</h1>)} */}
</>
      
    )

}


export default Prc