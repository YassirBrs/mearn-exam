import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    //This reffers to this in methods
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      gender: "",
      dob: new Date(),
      news: true,
      email: "",
      photo: ""
    };
  }

  componentDidMount() {}
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }
  onChangeDob(dob) {
    this.setState({
      dob: dob
    });
  }
  onChangeNews(e) {
    this.setState({
      news: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      gender: this.state.gender,
      dob: this.state.dob,
      news: this.state.news,
      email: this.state.email,
      photo: this.state.photo
    };
    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    window.location = "/list";
  }

  render() {
    return (
      <div>
        <h3>Create New User </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Gender: (Male|Female) </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </div>
          <div className="form-group">
            <label>Date de naissance: </label>
            <div>
              <DatePicker
                selected={this.state.dob}
                onChange={this.onChangeDob}
              />
            </div>
          </div>
          <div className="form-group">
            <label>News </label>
            <input
              type="text"
              className="form-control"
              value={this.state.news}
              onChange={this.onChangeNews}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Photo : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.photo}
              onChange={this.onChangePhoto}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-success"
            />
          </div>
        </form>
      </div>
    );
  }
}
