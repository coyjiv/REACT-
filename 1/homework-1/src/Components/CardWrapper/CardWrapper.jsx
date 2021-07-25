import React, { useState, useEffect } from 'react';
import "./CardWrapper.scss"
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import axios from "axios";

export default function CardWrapper(props) {
  const[cards,setCards]=useState([]);
  const[isLoading,toggleLoading]=useState(true);
  
  useEffect(()=>{
    async function fetchData(){
    const cardss = await axios("/articles.json");
    setCards(cardss.data);
    toggleLoading(false);
    console.log(
            <Card
                key={cardss.article}
                id={id+=1}
                path={cardss.path}
                price={cardss.price}
                name={cardss.name}
                openCart={props.openCart}/>)
    localStorage["products"]= JSON.stringify(cards
        .map(card =>
            <Card
                key={card.article}
                id={id+=1}
                path={card.path}
                price={card.price}
                name={card.name}
                openCart={props.openCart}/>).join())
}
fetchData();
  },[]);
    if (isLoading) return <Loading />;
    let id = 0; 
        return (
     <div className="CardWrapper">
      {cards?cards
      .map(card =>
         <Card
         key={card.article}
         id={id+=1}
         path={card.path}
         price={card.price}
         name={card.name}
         openCart={props.openCart}/>)
      :null}
      </div>
  )  
    }
