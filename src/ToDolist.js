import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
const ToDolist = () => {
    let [task,setTask] = useState("");  //array destructuring
    let [taskArray,setTaskArray] = useState([]);
    let onChangeHandler=(event)=>{
        setTask(event.target.value)
    }
    let clickHandler=()=>{
        setTaskArray([...taskArray,task]);
        setTask(taskArray);
        document.getElementById('input').value='';
    }
   
    return ( 
        <>
            <div className="container mt-5 p-5 bg-dark text-light">
             <div>
                <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-md-2">
             <label htmlFor="text" classNme="form-label" id="">Task Name:-</label>
             </div>
             <div className="col-md-7">
             <input
                type="text"
                className="form-control"
                name=""
                id="input"
                aria-describedby="helpId"
                placeholder=""
                onChange={onChangeHandler}
             /><br/>
              </div>
              <button onClick={clickHandler}>Add Task</button>
             </div>  
              </div>
              </div>
              <div className="container bg-light">
              <ol type="1">{taskArray.map((value,index)=>{
                return <li key={index}>{index+1}. {value}</li>
               })
        }</ol>
        </div>
        </>
     );
}
export default  ToDolist;