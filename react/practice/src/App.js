
import './App.css';
import Prc from './prc'
import {useState,useEffect} from 'react'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

function App() {

const router=createBrowserRouter([{

path:'./prc'


}])


const run=()=>{



}


  return (

  <button onClick={()=>run()}> test</button>
  )
}

export default App;
