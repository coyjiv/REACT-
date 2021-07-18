import React, {Component} from 'react';
import "./CardWrapper.scss"
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import axios from "axios";
class CardWrapper extends Component {
    state = {
    cards: [],
    isLoading: true
  }
  async componentDidMount() {
    const cards = await axios("/articles.json");
    this.setState({cards: cards.data, isLoading: false});
  }
    render() {
        const {isLoading, cards} = this.state;
    if (isLoading) return <Loading />;
    let id = 0;
    const cardsItems = cards
      .map(card => <Card key={card.article} id={id+=1} path={card.path} price={card.price} name={card.name} openCart={this.props.openCart}/>)
        return (
            <div className="CardWrapper">
                {cardsItems}
            </div>
        );
    }
}

export default CardWrapper;