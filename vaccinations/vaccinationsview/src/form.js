import { Component } from "react";
import getCities from "./cities";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthDate: "",
      address: "",
      city: "",
      zip: "",
      landLine: "",
      cellularPhone: "",
      infected: false,
      bloodPressure: false,
      bloodSugar: false,
      lungDisease: false,
      other: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append(
      "json1",
      JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        date: this.state.birthDate,
        address: this.state.address,
        city: this.state.city,
        zipCode: this.state.zip,
        landLine: this.state.landLine,
        cellularPhone: this.state.cellularPhone,
        covidInfections: this.state.infected,
        Comorbidities: {
          bloodPressure: this.state.bloodPressure,
          bloodSugar: this.state.bloodSugar,
          lungDisease: this.state.lungDisease,
          other: this.state.other,
        },
      })
    );
    console.log(formData);
    const requestOptions = {
      method: "POST",
      headers: {
        charset: "utf-8",
      },
      mode: "no-cors",
      body: formData,
    };
    fetch("http://127.0.0.1:8000/register/", requestOptions).then(
      alert("registered succesfully")
    );
  }

  render() {
    return (
      <div className="container">
<form onSubmit={this.handleSubmit}>
          <div className="form-group pt-2">
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              id="lastName"
              value={this.state.lastName.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              className="form-control"
              type="date"
              name="birthDate"
              id="birthDate"
              required
              value={this.state.birthDate.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="address">Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              id="address"
              value={this.state.address.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="city">City</label>
            <select
              className="form-control"
              type="text"
              name="city"
              id="city"
              value={this.state.city.value}
              onChange={this.handleChange}
            >
              {getCities().map((item) => (
                <option key={item.semel_yeshuv} value={item.english_name}>
                  {item.english_name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group pt-2">
            <label htmlFor="zip">Zip Code</label>
            <input
              className="form-control"
              type="number"
              name="zip"
              id="zip"
              value={this.state.zip.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="landLine">landLine</label>
            <input
              className="form-control"
              type="text"
              name="landLine"
              id="landLine"
              value={this.state.landLine.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="cellularPhone">Cellular Phone</label>
            <input
              className="form-control"
              type="text"
              name="cellularPhone"
              id="cellularPhone"
              value={this.state.cellularPhone.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="infected">
              I have been infected by covid19 before
            </label>
            <input
              type="checkbox"
              name="infected"
              id="infected"
              value=""
              checked={this.state.infected}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group pt-2">
            <label htmlFor="comorbidities">
              Do you have any comorbidities? (check all that apply)
            </label>
            <br />
            <input
              type="checkbox"
              name="bloodPressure"
              id="bloodPressure"
              onChange={this.handleChange}
            />
            <label style={{ marginLeft: "10px" }} htmlFor="bloodPressure">
              high blood pressure
            </label>
            <br />
            <input
              type="checkbox"
              name="bloodSugar"
              id="bloodSugar"
              onChange={this.handleChange}
            />
            <label style={{ marginLeft: "10px" }} htmlFor="bloodSugar">
              high blood sugar
            </label>
            <br />
            <input
              type="checkbox"
              name="lungDisease"
              id="lungDisease"
              onChange={this.handleChange}
            />
            <label style={{ marginLeft: "10px" }} htmlFor="lungDisease">
              lung disease
            </label>
            <br />
            <input
              type="checkbox"
              name="other"
              id="other"
              onChange={this.handleChange}
            />
            <label
              style={{ marginLeft: "10px", marginRight: "10px" }}
              htmlFor="other"
            >
              Other
            </label>
            <input
              type="text"
              name="other"
              id="other"
              readOnly={!this.state.other}
              onChange={this.handleChange}
            />
            <br />
            <br />
          </div>
          <div className="form-group pt-2">
          <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;