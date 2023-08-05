import { useEffect ,useState} from "react";
import axios from "axios";
function AxiosApi(){ 
    const[title,setTitle] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            response => setTitle(response.data)
        )
    },[])
   
    return(
        <div>
           
              {title.map(item => <li key={item.id}>{item.id}</li>)}
            

        </div>
    )
} 
export default AxiosApi;