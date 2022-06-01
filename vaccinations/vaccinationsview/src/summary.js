import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import getCities from "./cities";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getData() {
    const requestOptions = {
      method: "GET",
      mode: "cors",
    };
    fetch("http://127.0.0.1:8000/summary/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        data = JSON.parse(data.json);
        this.setState({ data: data, get: true });
      });
  }
  componentDidMount() {
    this.getData();
    this.render();
  }

  handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  render() {
    let { data, get } = this.state;
    if (!get) {
      return (
        <div>
          <b>Please wait for data load</b>
        </div>
      );
    }
    return (
      <div>
        <div>
        <div className="form-group pt-2">
            <label htmlFor="city">City</label>
            <select
              className="form-control"
              type="text"
              name="city"
              id="city"
              value={this.state.city}
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
            <label htmlFor="fromDate">From date</label>
            <input type="date" name="fromDate" onChange={this.handleChange}></input>
          </div>
          <div className="form-group pt-2">
            <label htmlFor="toDate">To date</label>
            <input type="date" name="toDate" onChange={this.handleChange}></input>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>created at</th>
              <th>name</th>
              <th>address</th>
              <th>contact</th>
              <th>birth date</th>
              <th>infected before</th>
              <th>comorbidities</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, key) => {
              if((!this.state.city || this.state.city === value.fields.city) && 
              (!this.state.fromDate || new Date(this.state.fromDate) <= new Date(value.fields.date))
              && (!this.state.toDate || new Date(this.state.toDate) >= new Date (value.fields.date)))
              {
                return (
                <tr key={key}>
                  {console.log(value)}
                  <td>{Date(value.fields.created)}</td>
                  <td>
                    {value.fields.firstName} {value.fields.lastName}
                  </td>
                  <td>
                    {value.fields.city} {value.fields.address}{" "}
                    {value.fields.zipCode}
                  </td>
                  <td>
                    cell:{value.fields.cellularPhone} <br />
                    landline: {value.fields.landline}
                  </td>
                  <td>{value.fields.date}</td>
                  <td>{value.fields.infected ? "yes" : "no"}</td>
                  <td>
                    <ul>
                      {value.fields.Comorbidities.bloodPressure ? (
                        <li>High Blood Pressure</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.Comorbidities.bloodSugar ? (
                        <li>High Blood Sugar</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.Comorbidities.lungDisease ? (
                        <li>Lung Disease</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.Comorbidities.other ? (
                        <li>{value.fields.comorbidities.other}</li>
                      ) : (
                        <span></span>
                      )}
                    </ul>
                  </td>
                </tr>
              );}
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Summary;