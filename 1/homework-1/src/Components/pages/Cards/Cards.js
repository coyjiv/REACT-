import React, {useEffect, useState} from 'react';
import CardWrapper from "../../CardWrapper/CardWrapper";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import Sidebar from "../../Sidebar/Sidebar";
import {connect} from "react-redux";


const Cards = (props) => {
    const {dispatch} = props;
    const {isInCart} = props.card;
    const adToCart = (e) => {addToCart(!isAdToCartOpen)
        dispatch({type: "ADD_TO_CART", data: [...isInCart,id]})

    }
    const [isAdToCartOpen, toggleCart] = useState(false);
    const [id, setId] = useState(0);
    const addToCart = (e) => {
        if (localStorage.getItem("cart")!==null) {
            localStorage.setItem("cart", [localStorage.getItem("cart"), id]);
            toggleCart(!isAdToCartOpen);
        }
        else{
            localStorage.setItem("cart", id);
            toggleCart(!isAdToCartOpen);
        }
    }
    return(
        <>
            <Sidebar/>
        <CardWrapper openCart={(e) => {
            toggleCart(!isAdToCartOpen);
            setId((e.target.className).split("btn-cart-add")[1])

        }} isVisible={true} isFav={true} />
    <Modal
    isOpen={isAdToCartOpen}
    onCancel={() => toggleCart(!isAdToCartOpen)}
    header="Do you want to add this to your cart?"
    closeButton={true}
    text="reaLLY"
    actions={
    <>
        <Button
            text="Ok"
            className="btn-ok"
            onClick={adToCart}
        />
        <Button
            text="Cancel"
            className="btn-cancel"
            onClick={() => toggleCart(!isAdToCartOpen)}
        />
    </>
}
    />
    </>
    )
}
const mapStateToProps = (state) => {
    return{
        cards:state.cards,
        card: state.card,
    }
}
export default connect(mapStateToProps)(Cards)