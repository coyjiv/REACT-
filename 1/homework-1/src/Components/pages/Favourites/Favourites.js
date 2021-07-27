import React from 'react';
import Card from "../../Card/Card";
import "./Favourites.scss"
const Favourites = (props) => {

    const allProducts = localStorage.getItem("products")
    const favProducts = localStorage.getItem("favourite");
    let json_data = JSON.parse(allProducts);
    let resultJson = [];
    console.log(favProducts)
    let cardCol = [];
    for(let i in json_data)
        resultJson.push(json_data [i]);
    if(favProducts){
        for (let index=0;index < favProducts.length; index++) {
            const element = favProducts[index]-1;
            cardCol.push(<Card
                key={resultJson[element].article}
                path={resultJson[element].path}
                price={resultJson[element].price}
                name={resultJson[element].name}/>)
        }}
    else{
        return(<div className="Fav">
            <h2>No items!</h2>
        </div> )

    }
    return (
        <div className="Fav">
            Favourite Items:

            {cardCol}

        </div>
    );
};
export default Favourites;