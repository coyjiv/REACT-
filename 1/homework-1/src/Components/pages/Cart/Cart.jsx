import React from 'react';
import Card from "../../Card/Card";
import "./Cart.scss"
import Sidebar from "../../Sidebar/Sidebar";
import {connect} from "react-redux";
const Cart = (props) => {
    console.log(props)
    const allProducts = props.cards.data;
    console.log(allProducts)
    const cartProductsArr = props.card.isInCart;
    let cardCol = [];
    if(cartProductsArr.length!==null){
    for (let index=0;index < cartProductsArr.length; index++) {
        const element = cartProductsArr[index];
        cardCol.push(<Card
            key={allProducts[element].article}
            id={allProducts[element].article}
            path={allProducts[element].path}
            price={allProducts[element].price}
            name={allProducts[element].name}/>)
    }}
    else{
        return(
            <>
                <Sidebar/>
            <div className="Cart">

            <h2>No items!</h2>
        </div>
               </> )

    }
    return (<>
            <Sidebar/>
        <div className="Cart">
            cartITEMS:

            {cardCol}

        </div>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        card: state.card,
        cards: state.cards,
    }
}
export default connect(mapStateToProps)(Cart)