
import React, { useState } from "react"
const Temperature =()=>{
    const[city,setcity]=useState("")
    const[result,setresult]=useState("")
    const changeHandler = e =>{
        setcity(e.target.value)
    }
    const submitHandler= e=>{
        e.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
       .then(response=>response.json()
    ).then(data=>{
        const kelvin=data.main.temp;
        const celsius=kelvin -273.15
        setresult("Temperature"+"city"+"\n"+Math.round(celsius)+ "°c")

    })
     
    }
    return(
        <div className="card">
            <div className="card-title">
                <h1>WEATHER APP</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter the City Name" value={city}onChange={changeHandler}/><br/><br/>
                    <input type="submit" value="Get Temperature"/>
                </form>
                <h1>{result}</h1>
            </div>
        </div>
    )


}
export default Temperature