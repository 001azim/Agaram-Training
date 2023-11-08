import { Outlet, Link } from "react-router-dom";
 
 function Test(props){
return(
<>

<h1>{props.islogged?"welcome":"error"}</h1>

<h1>{props.username}</h1>

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
</>
)


}

export default Test