import React, {useEffect, useState} from 'react';
import "./Card.scss"
import Button from "../Button/Button";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function Card(props) {
    // console.log(props)
    const {isFavourite,isInCart} = props.card;
    const {dispatch} =props;
    const star = () => {
        if (localStorage.getItem(props.id) === "favourite") {
            const stringFav = localStorage.getItem("favourite");
            const arrFav = stringFav.split(",");
            const indexChange = arrFav.indexOf(props.id.toString());
            console.log(arrFav, indexChange)
            arrFav.splice(indexChange,1);
            localStorage.removeItem(props.id);
            dispatch({type: "SET_FAVOURITE", data: arrFav})
            localStorage.setItem("favourite", arrFav)
        } else {
                localStorage.setItem(props.id, "favourite")
            dispatch({type: "SET_FAVOURITE", data: [...isFavourite,props.id]})
            localStorage.setItem("favourite", [localStorage.getItem("favourite")? localStorage.getItem("favourite"): null, props.id])
            }
        }
    return (
        <>
                <div className="cardContainer">
                    <svg viewBox='0 0 16 17' width='16' height='17' xmlns='http://www.w3.org/2000/svg'
                         fill={localStorage.getItem(props.id) === "favourite" ? "#ffffff" : "#000"} className="star-btn" onClick={star}>
                        <path
                            d='M14.1891 6.37042L10.2219 5.79385L8.44847 2.19854C8.40003 2.1001 8.32034 2.02042 8.2219 1.97198C7.97503 1.8501 7.67503 1.95167 7.55159 2.19854L5.77815 5.79385L1.81097 6.37042C1.70159 6.38604 1.60159 6.4376 1.52503 6.51573C1.43247 6.61086 1.38146 6.73885 1.38322 6.87157C1.38498 7.0043 1.43936 7.13089 1.5344 7.22354L4.40472 10.022L3.72659 13.9735C3.71069 14.0655 3.72086 14.16 3.75595 14.2464C3.79105 14.3329 3.84966 14.4077 3.92514 14.4626C4.00062 14.5174 4.08995 14.55 4.183 14.5566C4.27605 14.5632 4.3691 14.5437 4.45159 14.5001L8.00003 12.6345L11.5485 14.5001C11.6453 14.5517 11.7578 14.5689 11.8657 14.5501C12.1375 14.5032 12.3203 14.2454 12.2735 13.9735L11.5953 10.022L14.4657 7.22354C14.5438 7.14698 14.5953 7.04698 14.611 6.9376C14.6532 6.66417 14.4625 6.41104 14.1891 6.37042Z'
                            stroke='#ffc107'
                        />
                    </svg>
                    <img
                        width="200px"
                        height="200px"
                        className="cardImage"
                        alt={props.alt}
                        src={props.path}
                    />
                    <h3 className="cardName">{props.name}</h3>
                    <h4 className="cardDescription">descr</h4>
                    <div className="priceWrapper">
                        <h2 className="cardPrice">{props.price}</h2>
                        {props.isVisible?<Button text="add to cart" className={"btn-cart-add"+props.id} onClick={props.openCart} isVisible={props.isVisible}/>:null}
                    </div>
                </div>
            </>
    )
}
    Card.propTypes = {
    id: PropTypes.number,
    name:PropTypes.string,
    price:PropTypes.number,
  };
const mapStateToProps = (state) => {
    return{
        card:state.card,
    }}
export default connect(mapStateToProps)(Card);