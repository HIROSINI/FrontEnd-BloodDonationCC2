import React,{useState}from 'react'
export default function Email() {
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const handleChange=(e)=>
    {
        e.preventDefault();
        if (Email.length===0 || Password.length===0)
        {
            setError(true)
        }
        console.log(Email,Password)
    }
  return (
    <div>
    <form onSubmit={handleChange}>
    <div>
    <input type="text" onChange={e=>setEmail(e.target.value)}></input>
    </div>
    {error && Email.length===0 ?
    <label>Please Enter the email</label> : ""}
    <div>
    <input type="password" onChange={e=>setPassword(e.target.value)}></input>
    </div>
    {error && Password.length===0 ?
    <label>Please enter the Password</label> : ""}
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}
