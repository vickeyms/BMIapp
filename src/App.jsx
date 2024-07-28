import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState(null);
  const[bmis,setBmis]=useState("");
  const[em,setEm]=useState("")
  const calBmi=()=>{
    setEm("")
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight&&isValidWeight){

      const hm=height/100;
      const bmiv=weight/(hm*hm);
      setBmi(bmiv.toFixed(2));
      if(bmiv<18.5){
        setBmis("Under Weight")
      }
      else if(bmiv>=18.5&&bmiv<24.9)
      {
        setBmis("Normal weight")
      }
      else if(bmiv>=25&&bmiv<29.9)
        {
          setBmis("Over weight")
        }
      else
          {
            setBmis("Obese")
          }
    }
    else{
      setBmi(null);
      setBmis("");
      setEm("Please enter a Valid number")
    }
  }

  const clearr=()=>{
  setBmi(null)
  setBmis("")
  setHeight("")
  setWeight("")
  setEm("")
  }


  return (
    <>
      <div className="bmicalculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
            {em && <p className='error'>{em}</p>}
          
          <div className="input-container">
            <label htmlFor='height'>Height(cm) :</label>
            <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}></input>
          </div>
          <div className="input-container">
            <label htmlFor='weight'>Weight(Kg) :</label>
            <input type="text" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)}></input>
          </div>
          <div className='bt'>
          <button onClick={calBmi}>Calculate BMI</button>
          <button onClick={clearr}>Clear</button>
         
          </div>
          {bmi!==null &&(
           <div className="result">
           <p>Your BMI is: {bmi}</p>
           <p>Ststus: {bmis}</p>
         </div>
         )}
        </div>


      </div>
    </>
  )
}

export default App