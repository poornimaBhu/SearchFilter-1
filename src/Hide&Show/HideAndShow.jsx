import { useState } from "react";

function HideAndShow(){
const[show,setShow]=useState(true)//once the condition is true then only it will display
    return(
        <div>
            {show ? <h1>Hello</h1>:null}
<h2>Hello World..!</h2>

        </div>
    )
}
export default HideAndShow;