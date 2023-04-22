import React, { Component } from "react";
import minimartService from "../services/minimart.service";

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.retrieveItems = this.retrieveItems.bind(this);
        
        this.state = {
            items: []
        }
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
                console.log(response.data);
            })
            .catch(e => {
                console.warn(e);
            });
    }

    render() {
        const { items } = this.state;

        return(
            <div className="list row">
                <div className="col-md-8">
                    <h4>Items Today</h4>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                        {items && items.map(item =>
                            <tr key={item.id}>
                                <td>{item.category}</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}