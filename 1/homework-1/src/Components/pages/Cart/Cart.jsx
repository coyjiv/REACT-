import React from 'react';
import axios from "axios";
import {useEffect} from "react/cjs/react.production.min";

const Cart = (props) => {
    let cartItems=[0,1,4,4,1]

    // useEffect(()=>{
    //     async function fetchData(){
    //         const cards = await axios("/articles.json");
    //         setCards(cards.data);
    //         toggleLoading(false);
    //     }
    //     fetchData();
    // },[]);
    return (
        <div>
            cartITEMS:
            {cartItems}

        </div>
    );
};

export default Cart;