
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
        {input("text", "First Name", "", [], true, "firstName", ()=> setFirstName())}
        {input("text", "Last Name", "", [], true, "lastName", ()=>setLastName())}
        {input("date", "Date of birth", "", [], true, "date", ()=>setDate())}
        {input("text", "Address", "", [], true, "address", ()=>setAddress())}
        {input("select", "City", "", getCities(), true, "city", ()=>setCity())}
        {input("text", "Zip code", "", [], false, "zipCode", ()=>setZipCode())}
        {input("text", "Land Line", "", [], false, "landLine", ()=>setLandLine())}
        {input("text", "Cellular phone", "", [], false, "cellularPhone", ()=>setCellularPhone())}
        {input("checkbox", "Have you been infected by COVID-19 before?", "", [], false, "covidInfections", ()=>setCovidInfections())}
        {input("multiple", "Comorbidities", "Other", ["Diabetes", "Cardio-Vascular problems", "Allergies", "Other"], true, "Comorbidities", ()=>setComorbidities())}
       
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
