import React, { Component } from "react";
import minimartService from "../services/minimart.service";
import { withRouter } from '../common/with-router';

class Item extends Component {
    constructor(props) {
        super(props);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.getItem = this.getItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = {
            currentItem: {
                name: "",
                category: "",
                price: "",
                stock: ""
            }
        }
    }

    componentDidMount() {
        this.getItem(this.props.router.params.name);
    }

    onChangePrice(e) {
        const price = e.target.value;
        
        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    price: price
                }
            };
        });
    }

    onChangeStock(e) {
        const stock = e.target.value;
        
        this.setState(function(prevState) {
            return {
                currentItem: {
                    ...prevState.currentItem,
                    stock: stock
                }
            };
        });
    }

    getItem(name) {
        minimartService.get(name)
            .then(response => {
                this.setState({
                    currentItem: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateItem() {
        minimartService.update(
            this.state.currentItem
        )
        .then (response => {
            console.log(response.data);
            this.setState ({
                message: "Item update successful"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deleteItem() {
        minimartService.delete(
            this.state.currentItem.name
        )
        .then(response => {
            console.log(response.data);
            alert("Delete successful");
            this.props.router.navigte('/');
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {
        const { currentItem } = this.state;

        return (
            <div>
                <div className="edit-form">
                    <h4>Item</h4>
                    <h5>{currentItem.category}</h5>
                    <h5>{currentItem.name}</h5>
                    <form>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            required
                            value={currentItem.price}
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
                            value={currentItem.stock}
                            onChange={this.onChangeStock}
                            name="stock"
                        />
                    </div>
                    </form>

                    <button
                        className="btn btn-danger"
                        onClick={this.deleteItem}
                        >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="btn btn-success"
                            onClick={this.updateItem}
                        >
                        Update
                    </button>
                    <p>{this.state.message}</p>
                </div>

            </div>
        )
    }

}

export default withRouter(Item);