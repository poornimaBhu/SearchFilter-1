import { useState } from "react";

function InputOnUI(){
    const [user,setUser]=useState()
    const handler = (e) =>{
        setUser(e.target.value)
    
    }
    return(
        <div>
            <h2>Fetching Input field data On UI</h2>
            <input type="text" placeholder="enter something here" value={user} name="user" 
            onChange={handler}/> <br></br>
            {user}
        </div>
    )
}
export default InputOnUI;