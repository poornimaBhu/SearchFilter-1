import { useState } from "react";

function HideBtn(){
    const[hide,setHide] = useState(true)
    return(
        <div>
            {/* <h1>Hi Good Morning</h1> */}
            {hide?<h1>Hi Poornima</h1>:null}
            <button onClick={()=>setHide(true)}>Show</button><br></br>
            <button onClick={()=>setHide(false)}>Hide</button>
        </div>
    )
}
export default HideBtn;