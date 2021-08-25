import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Favourites from "../Components/pages/Favourites/Favourites";
import Cart from "../Components/pages/Cart/Cart";
import Cards from "../Components/pages/Cards/Cards";
import {connect} from "react-redux";
import Sidebar from "../Components/Sidebar/Sidebar";
import CardWrapper from "../Components/CardWrapper/CardWrapper";
import Modal from "../Components/Modal/Modal";
import Button from "../Components/Button/Button";


const AppRoutes = (props) => {

    const {dispatch} = props;
    const {isInCart} = props.card;
    const [isAdToCartOpen, toggleCart] = useState(false);
    const [id, setId] = useState(0);
    const addToCart = (e) => {
        if (localStorage.getItem("cart")!==null) {
            localStorage.setItem("cart", [localStorage.getItem("cart"), id]);
            dispatch({type: "ADD_TO_CART", data: [...isInCart,id]})
            toggleCart(!isAdToCartOpen);
        }
        else{
            localStorage.setItem("cart", id);
            dispatch({type: "ADD_TO_CART", data: [...isInCart,id]})
            toggleCart(!isAdToCartOpen);
        }
    }


    return(<Switch>
            <Redirect exact from='/' to="/cards"/>
            <Route exact path="/cards">
                <Cards>
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
                                        onClick={addToCart}
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
                </Cards>
            </Route>
            <Route exact path="/favourites">
                <Favourites cart={addToCart}/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
        </Switch>
    );
}
const mapStateToProps = (state) => {
    return{
        cards:state.cards,
        card: state.card,
    }
}
export default connect(mapStateToProps)(AppRoutes)