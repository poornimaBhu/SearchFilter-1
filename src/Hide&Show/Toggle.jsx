import { useState } from "react";

function Toggle(){
    const[toggle,setToggle] = useState(true)

    return(
        <div>
           {toggle? <h2>Hello React...?</h2>: <p>In Hide Mode</p>}

           <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )







    // const[toggle,setToggle] = useState()
    // return(
    //     <div>
    //         {toggle?<h1>Hello World..!</h1>:null}
    //         <button onClick={()=>setToggle(!toggle)}>Toggle</button>
    //     </div>
    // )
}
export default Toggle;