import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom";
import ManageBustiming from "./ManageBustime";

const UpdateBustiming=()=> {
    const [busId,setbusId]=useState("");
    const [day,setday]=useState("");
    const [busFi,setbusFi]=useState("");
    const [busS,setbusS]=useState("");
    const [busT,setbusT]=useState("");
    const [busFo,setbusFo]=useState("");
    const [responseMsg,setresponseMsg]=useState("");

    let {Sid} = useParams();

    const updateBus=()=>{
        Axios.put(`http://localhost:3001/update/${Sid}`,{
            busId:busId,
            day:day,
            busFi:busFi,
            busS:busS,
            busT:busT,
            busFo:busFo,
        })
        .then((res)=>{
            setresponseMsg(res.data.msg);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    useEffect(()=>{
        Axios.get(`http://localhost:3001/getBus/${Sid}`)
        .then((response)=>{
            setbusId(response.data.result.busId);
            setday(response.data.result.day);
            setbusFi(response.data.result.busFi);
            setbusS(response.data.result.busS);
            setbusT(response.data.result.busT);
            setbusFo(response.data.result.busFo);
        })
        .catch((err)=>{
            console.log(err);
        });

    },[]);

    
    return (
      <div className="bustiming-form">
        <table className="table table-striped">
            <theade>
                <tr>
                    <td colSpan="2">
                        <h1 className="display-6"> Bus Timeing</h1>
                    </td>
                </tr>
            </theade>
            <tbody>
                <tr>
                    <td>Bus ID:</td>
                    <td>
                        <input type="text" className="form-control"
                        onChange={(e=>{
                            setbusId(e.target.value);
                        })}
                        value={busId}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>Day:</td>
                    <td>
                        <input type="text" className="form-control"
                        onChange={(e)=>{
                            setday(e.target.value);
                        }}
                        value={day}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>First Time:</td>
                    <td>
                        <input type="time" className="form-control"
                        onChange={(e)=>{
                            setbusFi(e.target.value);
                        }}
                        value={busFi}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>Second Time:</td>
                    <td>
                        <input type="time" className="form-control"
                        onChange={(e)=>{
                            setbusS(e.target.value);
                        }}
                        value={busS}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>Third Time:</td>
                    <td>
                        <input type="time" className="form-control"
                        onChange={(e)=>{
                            setbusT(e.target.value);
                        }}
                        value={busT}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td>Fourth Time:</td>
                    <td>
                        <input type="time" className="form-control"
                        onChange={(e)=>{
                            setbusFo(e.target.value);
                        }}
                        value={busFo}
                        ></input>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{textAlign:"center"}}>
                        <button className="btn btn-info" onClick={updateBus}>Update</button>
                    </td>
                </tr>
            </tbody>

        </table>
        <div>{responseMsg}</div>
        <div>
        <Link to={`/manage`} className="nav-link">
            <button className="btn btn-success">Previous</button>
            </Link>
        </div>

      </div>

    );
  };
  
  export default UpdateBustiming;