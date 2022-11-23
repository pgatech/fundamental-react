import React,{Component} from "react";

class CardProduct extends React.Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState ({
            order: this.state.order + 1
        },() => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0 ){
            this.setState ({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return (
                    <div className="card">
                        <div className="img-thumb-prod">
                        <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>
                        <p className="product-title">Seblak Cabai Jahannam Paket Komplit</p>
                        <p className="product-price">Rp. 15.000</p>
                        <div className="counter">
                            <button className="minus" onClick={this.handleMinus}>-</button>
                            <input type="text" name="" id="" value={this.state.order}/>
                            <button className="plus" onClick={this.handlePlus}>+</button>
                        </div>
                    </div>
      
        )
    }
}

export default CardProduct;