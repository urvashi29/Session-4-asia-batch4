import React, { Component } from "react";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

export default App;





// API:
// http status code
// https methos: get(), post(), update/put() post()/id, delete()

// for api call: fetch or axios

// free API:
// get
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001
// https://jsonplaceholder.typicode.com/users/
// https://jsonplaceholder.typicode.com/posts/

// https://rapidapi.com/hub
