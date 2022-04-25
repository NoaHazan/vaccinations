import React, { Component } from "react";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = { get: false };
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
    let { data, get } = this.state; //state is an object which contains data and get. 
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>created at</td>
              <td>name</td>
              <td>address</td>
              <td>contact</td>
              <td>birth date</td>
              <td>infected before</td>
              <td>comorbidities</td>
            </tr>
          </thead>
          <tbody>
            {get ? (
              data.forEach((value) => {
                console.log(value);
                return (
                  <tr key={value.pk}>
                    <td>{value.fields.created}</td>
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
                    <td>{value.fields.created}</td>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Summary;