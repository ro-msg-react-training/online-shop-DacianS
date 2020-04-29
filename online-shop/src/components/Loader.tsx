import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
export interface LoaderProps {
    loading: boolean;
}

export const loader = (Component: React.ComponentType) =>
    class Loading extends React.Component<LoaderProps> {
        render() {
            //console.log("loading")
            return this.props.loading ? <Loader visible="true" /> : <Component {...this.props} />;
        }
    };