import { useState } from "react"
import Button from 'react-bootstrap/Button';

export function Call(props){

    let [inputvalue,newvalue]=useState([])

return (

    <>

        <input id="inp" type="text" onKeyUp={(e) => newvalue(e.target.value)} />
        <Button type="button" variant="primary" onClick={() => props.setvalue([...props.todo, inputvalue])}> Add</Button>
   

    </>



)




}