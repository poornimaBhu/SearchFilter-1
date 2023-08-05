import { useState } from "react";
import Data from "./Data.json"

function SearchFilter(){
    const[search,setSearch]=useState("")

    return(
        <div>
            <center>
            <h1>Search Filter</h1><br></br>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} style={{marginBottom:"10px"}}/>
            {Data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
                return <div style={{"border":"1px solid grey",width:"40%",padding:"8px",marginTop:"10px"}}>
                    {city.name}
                </div>

            })}
</center>
        </div>
    )
    //{Data.filter(city=>city.name.toLowercase().includes(search.toLowercase())).map(city=>{city.name}))}
}
export default SearchFilter;