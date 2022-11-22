import React,{Component, Fragment} from "react";

class Product extends React.Component {
    render(){
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="#" alt="" />
                    </div>
                    <div className="troley"></div>
                    <div className="count">3</div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">

                    </div>
                    <p className="product-title">Ini Adalah Title</p>
                    <p className="product-price">Rp. 410.000</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" name="" id="" value={3}/>
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;