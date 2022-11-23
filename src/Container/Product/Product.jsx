import React,{Component, Fragment} from "react";
import './Product.css';

class Product extends React.Component {
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
                            <div className="count">3</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-thumb-prod">
                        <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <p className="product-title">Seblak Cabai Jahannam Paket Komplit</p>
                        <p className="product-price">Rp. 15.000</p>
                        <div className="counter">
                            <button className="minus">-</button>
                            <input type="text" name="" id="" value={3}/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;