import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './name';
import { Container } from 'react-bootstrap';
import Test from './test'
import { useState } from 'react';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Timer from "./timer";


 function App() {

  const [islogged,setlogged]=useState(false)
 const [username,setusername]=useState("")


  const router = createBrowserRouter([{
    path:"/",
    element:<User islogged={islogged} setlogged={setlogged}
    username={username} setusername={setusername}/>
  },
  {
    path:"/home",
    element:<h1>home page</h1>
  },
  {
    path:"/test",
    element:<Test islogged={islogged} setlogged={setlogged}
    username={username} setusername={setusername}
  />
  },{
path:'/timer',
element:<Timer/>

  }
  
  
  ])



  return(
   
    <RouterProvider router={router} />
  )

}

export default App


