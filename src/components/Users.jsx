import { useEffect,useState } from "react";
function Users()
{
 let tstyle={'color':'red','background-color':'lightgreen'}
 const [users,setUsers]=useState([])
 useEffect(()=>
 {
 //using fetch to make api call
 fetch("https://jsonplaceholder.typicode.com/users")
 .then(res=>res.json())
 .then(data=>setUsers(data))
 console.log(users);
 },[])
 return(
 <>
 <h3>User Details</h3>
 <table border="1" style={tstyle}>
 
{users.map((user)=>(<tr><td>{user.name}</td><td>{user.email}</td></tr>))}
 </table>
 </>
 )
}
export default Users;