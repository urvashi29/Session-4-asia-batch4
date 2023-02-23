import React, { Component } from "react";
import _ from "lodash";

class Home extends Component {
  state = {
    empData: [
      {
        id: 1,
        name: "alex",
        age: 20,
        designation: "developer",
      },
      {
        id: 2,
        name: "alina",
        age: 24,
        designation: "testing",
      },

      {
        id: 3,
        name: "harry",
        age: 27,
        designation: "manager",
      },
    ],
  };

  handleClick = () => {
    let arr = [1, [2, [3, [4]], 5]];
    console.log(_.flattenDeep(arr));
  };

  render() {
    const empList = this.state.empData.map((emp) => {
      return (
        <React.Fragment key={emp.id}>
          <p>{emp.name}</p>
          <p>{emp.age}</p>
          <p>{emp.designation}</p>
        </React.Fragment>
      );
    });
    return (
      <>
        {empList}
        <button onClick={this.handleClick}>Flatten</button>
      </>
    );
  }
}

export default Home;
