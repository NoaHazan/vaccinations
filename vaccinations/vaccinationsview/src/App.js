
import './App.css';
import input from './input.js'
import getCities from './cities.js'
import { useState } from 'react';


function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [date, setDate] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [landLine, setLandLine] = useState("")
  const [cellularPhone, setCellularPhone] = useState("")
  const [covidInfections, setCovidInfections] = useState("")
  const [Comorbidities, setComorbidities] = useState("")


  let handleSubmit = async (e) =>{
    e.preventDefault(); //dont send the data to the server, save it here
    try{
      console.log(JSON.stringify({
        firstName: firstName,
        lastName:lastName,
        date:date,
        address:address,
        city:city,
        zipCode:zipCode,
        landLine:landLine,
        cellularPhone:cellularPhone,
        covidInfections:covidInfections,
        Comorbidities:Comorbidities
      }))
      //wait for the fetch to end - the string below will be the django address. 
      let res = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST", 
        body: JSON.stringify({
          firstName: firstName,
          lastName:lastName,
          date:date,
          address:address,
          city:city,
          zipCode:zipCode,
          landLine:landLine,
          cellularPhone:cellularPhone,
          covidInfections:covidInfections,
          Comorbidities:Comorbidities
        })
      })

    }
    catch{
      
    }

  }
  return (
    <div className="App">
      <div>
      <form onSubmit={handleSubmit} method="POST">
        {input("text", "First Name", "", [], true, "firstName", (e)=> setFirstName(e.target.value))}
        {input("text", "Last Name", "", [], true, "lastName", (e)=>setLastName(e.target.value))}
        {input("date", "Date of birth", "", [], true, "date", (e)=>setDate(e.target.value))}
        {input("text", "Address", "", [], true, "address", (e)=>setAddress(e.target.value))}
        {input("select", "City", "", getCities(), true, "city", (e)=>setCity(e.target.value))}
        {input("text", "Zip code", "", [], false, "zipCode", (e)=>setZipCode(e.target.value))}
        {input("text", "Land Line", "", [], false, "landLine", (e)=>setLandLine(e.target.value))}
        {input("text", "Cellular phone", "", [], false, "cellularPhone", (e)=>setCellularPhone(e.target.value))}
        {input("checkbox", "Have you been infected by COVID-19 before?", "", [], false, "covidInfections", (e)=>setCovidInfections(e.target.value))}
        {input("multiple", "Comorbidities", "Other", ["Diabetes", "Cardio-Vascular problems", "Allergies", "Other"], true, "Comorbidities", (e)=>setComorbidities(e.target.value))}
       
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
