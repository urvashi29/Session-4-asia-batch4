import React, { Component } from "react";
import axios from "axios";
import { getEmployeeApi } from "../assets/services";
import {Link} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

class Employee extends Component {
  state = {
    employee: [],
  };

  componentDidMount = () => {
    //api calls
    axios
      .get(getEmployeeApi)
      .then((res) => {
        console.log(res.data);
        this.setState({
          employee: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   conditional rendering
  //ternary operator (condition) ? () : ()

  render() {
    const employeeData = this.state.employee.length ? (
      this.state.employee.map((emp) => {
        return (
          <React.Fragment key={emp.id}>
            <img src={emp.imageUrl} />
            <p>
              <Link to={"/employee/" + emp.id}>
                {emp.firstName} {emp.lastName}
              </Link>
            </p>
          </React.Fragment>
        );
      })
    ) : (
      <ClipLoader
      color="teal"
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    );

    return <>{employeeData}</>;
  }
}

export default Employee;

// conditional rendering of components
// {valid ? (<Dashboard />) : (<Login/>)}

// Main = () => {

//     return () => {

//     }
// }

// or

// add = () => {

// }

// add(() => {

// });
