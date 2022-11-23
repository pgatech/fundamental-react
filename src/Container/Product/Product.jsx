import React,{Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.css';

class Product extends React.Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState ({
            order: newValue 
        })
    }

    render(){
        return (
            <Fragment>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img src="#" alt="" />
                        </div>
                        <div className="troley">
                            <img src="" alt="" />
                            <div className="count">{this.state.order}</div>
                        </div>
                    </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
                </div>
            </Fragment>
        )
    }
}

export default Product;