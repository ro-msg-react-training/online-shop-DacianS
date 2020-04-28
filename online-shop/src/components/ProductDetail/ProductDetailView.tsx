import React from "react";
import { Link } from "react-router-dom";
import { ProductDetail } from "../../actions";
import { ButtonStructure, DetailViewButton } from "./ProductDetailButtons"

export interface IProductDetail {
    product?: ProductDetail;
    delete: () => void;
}

export const ProductDetailView = (props: IProductDetail) => {
    let deleteButton: ButtonStructure = {
        buttonText: "Delete",
        onDelete: () => props.delete(),
        type: "button is-rounded has-text-weight-bold"
    }
    if (props.product) {
        return (
            <div className="Product">
                <div>
                    <img src={props.product?.image} alt="" />
                    <p>{props.product?.name}</p>
                </div>
                <p>Description: {props.product?.description}</p>
                <button className="button is-rounded has-text-weight-bold">
                    Add to cart
          </button>
                <DetailViewButton {...deleteButton} />
                <Link className="button is-rounded has-text-weight-bold" to={`/edit`}>Edit </Link>
            </div>
        );
    }
    else return null;
}