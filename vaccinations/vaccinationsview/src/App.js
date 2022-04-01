
import './App.css';
import input from './input.js'
import getCities from './cities.js'


function App() {

  return (
    <div className="App">
      <div>
      <form>
        {input("text", "First Name", "", [], true)}
        {input("text", "Last Name", "", [], true)}
        {input("date", "Date of birth", "", [], true)}
        {input("text", "Address", "", [], true)}
        {input("select", "City", "", getCities(), true)}
        {input("text", "Zip code", "")}
        {input("text", "Land Line", "")}
        {input("text", "Cellular phone", "")}
        {input("checkbox", "Have you been infected by COVID-19 before?", "", [], true)}
        {input("multiple", "Comorbidities", "Other", ["Diabetes", "Cardio-Vascular problems", "Allergies", "Other"], true)}
       

      </form>
      </div>
    </div>
  );
}

export default App;
