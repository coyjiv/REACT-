import React, { useState } from 'react';
import CardWrapper from "../../CardWrapper/CardWrapper";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";


const Cards = () => {
    const [isSecondModalOpen, handleSecondModalOpen] = useState(false);
    const [isAdToCartOpen, toggleCart] = useState(false);
    const [id, setId] = useState(0);
    const addToCart = (e) => {
        localStorage.setItem("cart", localStorage.getItem("cart")+id);
        toggleCart(!isAdToCartOpen);
    }
    return(
        <>
        <CardWrapper openCart={(e) => {
            toggleCart(!isAdToCartOpen);
            console.log((e.target.className).split("btn-cart-add")[1])
            setId((e.target.className).split("btn-cart-add")[1])
        }} />
    <Modal
        isOpen={isSecondModalOpen}
        onCancel={() => handleSecondModalOpen(!isSecondModalOpen)}
        header="Do you want to upload this file?"
        closeButton={true}
        text="something else"
        actions={
            <>
                <h2>Ogo</h2>
                <Button
                    text="Ok"
                    className="btn-ok"
                    onClick={() => handleSecondModalOpen(!isSecondModalOpen)}
                />
                <Button
                    text="Cancel"
                    className="btn-cancel"
                    onClick={() => handleSecondModalOpen(!isSecondModalOpen)}
                />
            </>
        }
    />
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
            onClick={() => addToCart(!isAdToCartOpen)}
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
export default Cards;