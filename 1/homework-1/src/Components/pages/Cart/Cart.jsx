import React from 'react';
import Card from "../../Card/Card";
import "./Cart.scss"
const Cart = () => {
    const allProducts = localStorage.getItem("products")
    const cartProducts = localStorage.getItem("cart");
    let json_data = JSON.parse(allProducts);
    let resultJson = [];
    let cardCol = [];
    for(let i in json_data)
        resultJson.push(json_data [i]);
    if(cartProducts){
    for (let index=4;index < cartProducts.length; index++) {
        const element = cartProducts[index]-1;
        cardCol.push(<Card
            key={resultJson[element].article}
            path={resultJson[element].path}
            price={resultJson[element].price}
            name={resultJson[element].name}/>)
    }}
    else{
        return(<div className="Cart">
            <h2>No items!</h2>
        </div> )

    }
    return (
        <div className="Cart">
            cartITEMS:

            {cardCol?cardCol:null}

        </div>
    );
};

export default Cart;