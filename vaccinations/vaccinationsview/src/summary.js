import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
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
              return (
                <tr key={key}>
                  {console.log(key)}
                  <td>{Date(value.fields.created)}</td>
                  <td>
                    {value.fields.firstName} {value.fields.lastName}
                  </td>
                  <td>
                    {value.fields.city} {value.fields.address}{" "}
                    {value.fields.zip}
                  </td>
                  <td>
                    cell:{value.fields.cellularPhone} <br />
                    landline: {value.fields.landline}
                  </td>
                  <td>{value.fields.birthDate}</td>
                  <td>{value.fields.infected ? "yes" : "no"}</td>
                  <td>
                    <ul>
                      {value.fields.comorbidities.bloodPressure ? (
                        <li>High Blood Pressure</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.comorbidities.bloodSugar ? (
                        <li>High Blood Sugar</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.comorbidities.lungDisease ? (
                        <li>Lung Disease</li>
                      ) : (
                        <span></span>
                      )}
                      {value.fields.comorbidities.other ? (
                        <li>{value.fields.comorbidities.other}</li>
                      ) : (
                        <span></span>
                      )}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Summary;