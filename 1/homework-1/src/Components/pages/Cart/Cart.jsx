import React, { useState } from 'react';
import axios from "axios";

const Cart = (props) => {
    // const [prod, setProd] = useState([]);
    const allProducts = localStorage.getItem("products")
    const cartProducts = localStorage.getItem("cart");
    console.log(cartProducts);
    let index = 4;
    var json_data = JSON.parse(allProducts);
    var result = [];

    for(var i in json_data)
        result.push([i, json_data [i]]);
    console.log(result)
    for (let index = 4; index < cartProducts.length; index++) {
        const element = cartProducts[index];
        result[index][2]
    }
    return (
        <div>
            cartITEMS:

            {}

        </div>
    );
};

export default Cart;