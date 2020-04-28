import React from "react";

export interface ButtonStructure {
    buttonText: string;
    onDelete: () => void;
    type: string;
}

export const DetailViewButton = (props: ButtonStructure) => {
    return (
        <button className={props.type} onClick={() => props.onDelete()}>
            <span>{props.buttonText}</span>
        </button>
    );
}