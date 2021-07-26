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
      console.log(JSON.parse(localStorage.getItem("products")))
    if (localStorage.getItem("products")===null) localStorage["products"] = JSON.stringify(cardss.data);
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
