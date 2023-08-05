import axios from "axios";
import { useEffect, useState } from "react";

function NewApi(){
    const[title,setTitle] = useState([])
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users/").then(
        response => setTitle(response.data)
    )
},[])
    return(
        <div>
            <h1>Apis Fetching The Data</h1>
            {title.map(item => <li key={item.id}>{item.address.city}</li>)}
        </div>
    )
}
export default NewApi;