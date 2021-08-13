import React, {useEffect} from 'react';
import Card from "../../Card/Card";
import "./Cart.scss"
import Sidebar from "../../Sidebar/Sidebar";
import {connect} from "react-redux";
import CartForm from "../../CartForm/CartForm";
const Cart = (props) => {
    const allProducts = props.cards.data;
    const cartProductsArr = props.card.isInCart;


    let cardCol = [];
    const indexArr =[];
    if(cartProductsArr){
        for (let index=0;index < cartProductsArr.length; index++) {
            const element = cartProductsArr[index];
            allProducts.map((object, index)=>{
                if (object.article === +element){
                    indexArr.push(index)
                }
            })
        }
        for (let index=0;index < indexArr.length; index++) {
            cardCol.push(<Card
                key={allProducts[indexArr[index]].article}
                id={allProducts[indexArr[index]].article}
                path={allProducts[indexArr[index]].path}
                price={allProducts[indexArr[index]].price}
                name={allProducts[indexArr[index]].name}
                isVisible={false}
                isFav={false}
            />)
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

            <CartForm cart={cartProductsArr} all={allProducts}/>
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