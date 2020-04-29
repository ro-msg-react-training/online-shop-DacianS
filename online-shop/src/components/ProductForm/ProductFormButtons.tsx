import React from "react";

export interface ButtonStructure {
    buttonText: string;
    onHandle: () => void;
    type: string;
}

export const DetailViewButton = (props: ButtonStructure) => {
    return (
        <button className={props.type} onClick={props.onHandle}>
            <span>{props.buttonText}</span>
        </button>
    );
}