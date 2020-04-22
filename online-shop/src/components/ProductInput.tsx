import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class ProductInput extends React.Component {

    render() {
        return (
            <form className="container">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name" name="name" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Category" name="category" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Description" name="description" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" type="number" placeholder="Price" name="price" />
                    </div>
                </div>
                <div>
                    <button className="button is-rounded is-success has-text-weight-bold"> Save</button>
                    <button className="button is-rounded is-danger has-text-weight-bold"> Cancel</button>
                </div>
            </form>
        );
    }

}

export default ProductInput;