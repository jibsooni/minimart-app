import React, { Component } from "react";
import minimartService from "../services/minimart.service";

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        
        this.state = {
            username: "",
            password: "",
            role: "0",

            submitted: false
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRole(e) {
        this.setState({
            role: e.target.value
        });
    }

    saveUser() {
        if (this.validate(this.state)) {
            var data = {
                username: this.state.username,
                password: this.state.password,
                role: this.state.role,
            };

            minimartService.createUser(data)
            .then (response => {
                this.setState ({
                    username: response.data.username,
                    role: response.data.role,
                    
                    submitted: true
                })
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
        }
    }

    validate(input) {
        if (input.username.length < 5 && input.username.length > 20) {
            alert("username should be between 5 and 20 characters");
            return false;
        } 
        var regexUsername =  /^[0-9a-zA-Z]+$/;
        if(!input.username.match(regexUsername)) {
            alert("username can only contain letters and numbers")
            return false;
        }

        var regexPassword = /^ *$/;
        if(input.password.match(regexPassword)) {
            alert("password should not contain spaces");
            return false;
        }
        return true;
    }

    newUser() {
        this.setState({
          username: "",
          password: "",
          role: "0",
    
          submitted: false
        });
    }

    render() {
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>New User Created!</h4>
                        <button className="btn btn-success" onClick={this.newUser}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          required
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          name="username"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          required
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          name="password"
                        />
                      </div>
                      {/* <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <div>
                            <select className="custom-select custom-select-lg mb-3" 
                                onChange={this.onChangeRole}
                                required
                            >
                                <option>Choose Role</option>
                                <option value="0">User</option>
                                <option value="1">Administrator</option>
                            </select>
                        </div>
                      </div> */}
                      <h3> </h3>
                      <button onClick={this.saveUser} className="btn btn-success">
                        Submit
                      </button>
                    </div>
                ) }
            </div>
        )
    }
}