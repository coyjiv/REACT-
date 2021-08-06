import React, {useEffect } from 'react';
import "./CardWrapper.scss"
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import axios from "axios";
import {connect} from "react-redux";

function CardWrapper({cards,openCart,dispatch}) {
  useEffect(()=>{
      if (cards.data.length===0) {
          axios("/articles.json")
              .then(res => {
                  dispatch({type: "SET_ALL_CARDS", data: res.data})
                  dispatch({type: "CARDS_ARE_LOADING", data: false})
                      if (localStorage.getItem("favourite")===null){
                          return
                      }
                      const stringFav = localStorage.getItem("favourite");
                      const arrFav = stringFav.split(",");
                      dispatch({type: "SET_FAVOURITE", data: arrFav})
                  })

          /*if (localStorage.getItem("products") === null) localStorage["products"] = JSON.stringify(cardss.data);*/
      }
  },[]);
    if (cards.isLoading) return <Loading />;
    /*let id = 0; */
        return (
     <div className="CardWrapper">
      {cards.data?cards.data
      .map(card =>
         <Card
         key={card.article}
         id={card.article}
         path={card.path}
         price={card.price}
         name={card.name}
         openCart={openCart}
         isVisible={true}/>)
      :null}
      </div>
  )  
    }
const mapStateToProps = (state) => {
    return{
        cards:state.cards,
    }
}
export default connect(mapStateToProps)(CardWrapper)


