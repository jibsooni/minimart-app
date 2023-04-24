import React, { Component } from "react";
import minimartService from "../services/minimart.service";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.sendLogin = this.sendLogin.bind(this);
        this.preLogin = this.preLogin.bind(this);
        this.retrieveItems = this.retrieveItems.bind(this);

        this.state = {
            username: "",
            password: "",
            isAdmin: false,
            submitted: false,

            loggedIn: false,
            items: []
        };
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

    sendLogin() {
        var data = {
            username: this.state.username,
            password: this.state.password
        };

        minimartService.login(data)
            .then(response => {
                if (response.data) {
                    this.setState({
                        username: response.data.username,
                        role: response.data.role,
                        loggedIn: true,
                        isAdmin: response.data.role === "Administrator"
                    })
                    if (response.data.role !== "Administrator") {
                        alert("Not administrator, please return to home page")
                    }
                } else {
                    alert("wrong username or password");
                }
                console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
    }

    preLogin() {
        this.setState({
            username: "",
            role: "User",

            loggedIn: false
        });
    }

    componentDidMount() {
        this.retrieveItems();
    }

    retrieveItems() {
        minimartService.getAll()
            .then(response => {
                this.setState({
                    items: response.data
                });
                // console.log(response.data);
            })
            .catch(e => {
                console.warn(e);
            });
    }
    
    render() {
        const { items } = this.state;
        return (
            <div className="submit-form">
                {(this.state.loggedIn && this.state.isAdmin) ? (
                    <div>
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items && items.map(item =>
                            <tr key={item.id}>
                                <td>{item.category}</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.stock}</td>
                                <td>
                                <button
                                    className="btn">
                                    <Link
                                        to={"/update/" + item.name}
                                        className="btn btn-sm btn-success"
                                    >
                                        Update
                                    </Link>
                                </button>   
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div>
                        <button
                            className="m-3 btn btn-sm btn-success">
                            <Link
                                to={"/add"}
                                className="btn btn-success"
                            >
                                Add Item
                            </Link>
                        </button>   
                    </div>
                </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
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
                            id="description"
                            required
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="password"
                        />
                        </div>
                        <h3> </h3>
                        <button onClick={this.sendLogin} className="btn btn-success">
                            Enter
                        </button>
                    </div>
                )

                }
            </div>
        )
    }

}