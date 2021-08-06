import React from 'react';
import Card from "../../Card/Card";
import "./Favourites.scss"
import Sidebar from "../../Sidebar/Sidebar";
import {connect} from "react-redux";

const Favourites = (props) => {
    const allProducts = props.cards.data;
    const favProducts = props.card.isFavourite;
    let cardCol = [];
    const indexArr =[];
    if(favProducts){
        for (let index=1;index < favProducts.length; index++) {
            const element = favProducts[index];
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
        isVisible={true}/>)
    }}


    else{
        return(
            <>
                <Sidebar/>
            <div className="Fav">
            <h2>No items!</h2>
        </div>
                </>)

    }
    return (
        <>
            <Sidebar/>
        <div className="Fav">
            Favourite Items:

            {cardCol}

        </div>
            </>
    );
};
const mapStateToProps = (state) =>{
    return{
        cards:state.cards,
        card:state.card,
    }
}
export default connect(mapStateToProps)(Favourites)