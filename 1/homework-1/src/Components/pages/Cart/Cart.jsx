import React, { useState } from 'react';
import axios from "axios";
import Card from "../../Card/Card";
import "./Cart.scss"
const Cart = (props) => {
    // const [prod, setProd] = useState([]);
    const allProducts = localStorage.getItem("products")
    const cartProducts = localStorage.getItem("cart");
    console.log(cartProducts);
    let index = 4;
    let json_data = JSON.parse(allProducts);
    let resultJson = [];
    let cardCol = [];
    for(var i in json_data)
        resultJson.push(json_data [i]);
    console.log(resultJson)
    for (let index=4;index < cartProducts.length; index++) {
        const element = cartProducts[index];
        console.log(resultJson[element])
        cardCol.push(<Card
            key={resultJson[element].article}
            path={resultJson[element].path}
            price={resultJson[element].price}
            name={resultJson[element].name}/>)
    }

    console.log(resultJson[cartProducts[index]])
    return (
        <div className="Cart">
            cartITEMS:

            {cardCol}

        </div>
    );
};

export default Cart;