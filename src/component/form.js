import React from "react";
import Getdata from "./ftdata";

export default function Form(props){
    const [handle,sethandle]=React.useState("")
    const [data,setdata]=React.useState("")
    const [fdata,setfdata]=React.useState("")
    const [bool,setbool]=React.useState(false)
    function handler(e){
        const {name,value}=e.target
        sethandle(value)
    }
    function submiter(e){
        e.preventDefault();
        setdata(handle);
        setbool(!bool)
    }
    
    console.log(props.theme)

    return(
        
        <main className={props.theme?'dark':''}>
        <div className="form">
           
            <form className="forma" onSubmit={submiter} >
                <label className="frm-label" htmlFor="hv">Enter your Handle:</label>
                <input className="frm-input" type="text" name="handle" value={handle} id="hv" onChange={handler}/>
                <button className="frm-btn">Submit</button>
                {bool&&<Getdata data={data} bol={bool}/>}
                {bool &&<button  className="clr-btn"  onClick={()=>{
                    setbool(!bool)
                }} >Clear </button> }
                
            </form>



            </div>
            </main>
           
    )
}