import React, {Component} from 'react';
import "./CardWrapper.scss"
import Card from "../Card/Card";
import axios from "axios";
class CardWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:[]
        }
    }
    renderCards = async() => {
            const res = await axios("/articles.json");
            const cardss = res.data;
        console.log(cardss);
        this.setState({cards: cardss})

        for (let index = 0; index < cardss.length; index++) {
            const element = res.data[index];
            // console.log(this.createCard(element.path, element.name, element.price));
            this.createCard(element.path, element.name, element.price)
        }
        }
    createCard(path, name, price){
        return <Card
                     path={path}
                     name={name}
                     price={price}
        />
    }
    render() {
        console.log(this.state)
        return (
            <div>
            </div>
        );
    }
}

export default CardWrapper;