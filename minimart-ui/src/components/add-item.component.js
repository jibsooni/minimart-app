import React, { Component } from "react";
import minimartService from "../services/minimart.service";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.newItem = this.newItem.bind(this);

        this.state = {
            id: null,
            name: "",
            category: "", 
            price: "",
            stock: "",
            
            submitted: false
          };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeStock(e) {
        this.setState({
            stock: e.target.value
        });
    }

    saveItem() {
        if (this.alphanumeric(this.state.name)) {
            var data = {
                name: this.state.name,
                category: this.state.category,
                price: this.state.price,
                stock: this.state.stock,
            };

            minimartService.create(data)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    category: response.data.category,
                    price: response.data.price,
                    stock: response.data.stock,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
        } else {
            console.log("only alphanumeric characters allowed in field: Name");
        }

        
    }

    newItem() {
        this.setState({
          name: "",
          category: "",
          price: "",
          stock: "",
    
          submitted: false
        });
    }

    alphanumeric(inputtxt)
    {
        var regex =  /^[0-9a-zA-Z]+$/;
        if(inputtxt.match(regex)) {
            return true;
        }
        else {
            alert("only alphanumeric characters allowed in field: Name");
            return false;
        }
    }

    render() {
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>New Item Created!</h4>
                        <button className="btn btn-success" onClick={this.newItem}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          required
                          value={this.state.name}
                          onChange={this.onChangeName}
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <div>
                            <select class="custom-select custom-select-lg mb-3" 
                                onChange={this.onChangeCategory}
                                required
                            >
                                <option selected>Choose Category</option>
                                <option value="0">Snacks</option>
                                <option value="1">Vegetables</option>
                                <option value="2">Fruits</option>
                                <option value="3">Drinks</option>
                                <option value="4">Baking</option>
                            </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          required
                          value={this.state.price}
                          onChange={this.onChangePrice}
                          name="price"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input
                          type="number"
                          className="form-control"
                          id="stock"
                          required
                          value={this.state.stock}
                          onChange={this.onChangeStock}
                          name="stock"
                        />
                      </div>
          
                      <button onClick={this.saveItem} className="btn btn-success">
                        Submit
                      </button>
                    </div>
                ) }
            </div>
        )
    }

}