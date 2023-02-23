import React, { Component } from "react";
import { getParticularEmployee } from "../assets/services";
import withRouter from "./withRouter";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

class Post extends Component {
  state = {
    employee: [],
  };

  componentDidMount = () => {
    console.log(this.props);

    let id = this.props.params.post_id;
    axios
      .get(getParticularEmployee + id)
      .then((res) => {
        console.log(res);
        this.setState({
          employee: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const emp = this.state.employee.length ? (
      this.state.employee.map((e) => {
        return (
          <React.Fragment key={e.id}>
            <p>
              {e.firstName} {e.lastName}
            </p>
            <p>{e.email}</p>
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

    return <div>{emp}</div>;
  }
}

export default withRouter(Post);
