import React, { useState } from 'react'

type arrayInt = Array<any>;
type big = bigint;


const Index = () => {
    const [numbers, setNumbers] = useState<arrayInt>([])
    const [numberValue, setNumberValue] = useState<big>(0)

const handleSetNumber = (e:any)=>{
    const {value} = e.target
    setNumberValue(value)
  
}

const handleAddNumber = ()=>{
  const values = numberValue.toString()
    if( values.length !==0){
        setNumbers((prev)=>[...prev, numberValue])
        setNumberValue(0)
       }else{
        alert("Cannot add empty value")
       }

   
}

  return (
    <div style={{
        border:"1px solid black",
        marginTop:"40px",
        width:"50%",
        borderRadius:"20px"
    }}>
       <h3 style={{textAlign:"center"}}>Number Directory</h3>
<div style={{display:"flex", justifyContent:"center"}}>
<input placeholder='Enter Number' style={{width:"70%", height:"40px", alignSelf:"center", marginRight:"20px"}} type="number" onChange={handleSetNumber} value={numberValue}/>
<button style={{ width:"70px"}} onClick={handleAddNumber}>Add</button>
</div>

<ol>
  {numbers.map((number,idx)=>(
    <li key={idx} style={{padding:"10px"}}>{number}</li>
  ))  }
</ol>

    </div>
  )
}

export default Index