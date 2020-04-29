import React from "react";
import { ProductDetail, ProductInput } from "../../actions";
import { ButtonStructure, DetailViewButton } from "./ProductFormButtons"

export interface ProductFormProps {
    product: ProductInput;
    productDetails?: ProductDetail;
    handleSave: () => void;
    onCancel: () => void;
    handleChange: () => void;
}

export const ProductFormView = (props: ProductFormProps) => {
    let saveButton: ButtonStructure = {
        buttonText: "Save",
        onHandle: () => props.handleSave(),
        type: "button is-rounded is-success has-text-weight-bold"
    };
    let cancelButton: ButtonStructure = {
        buttonText: "Cancel",
        onHandle: () => props.onCancel(),
        type: "button is-rounded is-danger has-text-weight-bold"
    };
    return (
        <form className="container">
            <div className="field">
                <label className="label">Name</label>
                <input className="input" type="text" placeholder="Name" name="name" defaultValue={props.productDetails?.name} onChange={props.handleChange} />
            </div>
            <div className="field">
                <label className="label">Category</label>
                <input className="input" type="text" placeholder="Category" name="category" defaultValue={props.productDetails?.category} onChange={props.handleChange} />
            </div>
            <div className="field">
                <label className="label">Description</label>
                <input className="input" type="text" placeholder="Description" name="description" defaultValue={props.productDetails?.description} onChange={props.handleChange} />
            </div>
            <div className="field">
                <label className="label">Price</label>
                <input className="input" type="number" placeholder="Price" name="price" defaultValue={props.productDetails?.price} onChange={props.handleChange} />
            </div>
            <div>
                <button className="button is-rounded is-success has-text-weight-bold" onClick={props.handleSave}> Save</button>
                <button className="button is-rounded is-danger has-text-weight-bold" onClick={() => props.onCancel()}> Cancel</button>
            </div>
        </form>
    );
}


