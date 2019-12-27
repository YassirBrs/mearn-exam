import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dob.substring(0, 10)}</td>
    <td>{props.user.news}</td>
    <td>{props.user.email}</td>
    <td>{props.user.photo}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>edit</Link> |{" "}
      <a
        // class="btn btn-outline-danger"
        href="#"
        onClick={() => {
          props.deleteuser(props.user._id);
        }}
      >
        delete
      </a>{" "}
    </td>
  </tr>
);

export default class usersList extends Component {
  constructor(props) {
    super(props);
    this.deleteuser = this.deleteuser.bind(this);
    this.state = { users: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteuser(id) {
    axios
      .delete("http://localhost:5000/users/" + id)
      .then(res => console.log(res.data));
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    });
  }
  userList() {
    return this.state.users.map(currentuser => {
      return (
        <User
          user={currentuser}
          deleteuser={this.deleteuser}
          key={currentuser._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Gender</th>
              <th>BirthDay</th>
              <th>News</th>
              <th>Email</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
