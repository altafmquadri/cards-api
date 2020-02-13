import React, { Component } from 'react';
import Card from './Card'
import './CardDeck.css'

const api = 'https://deckofcardsapi.com/api/deck/new/shuffle/'

class CardDeck extends Component {
    state = {
        deck_id: '',
        remaining: '',
        cards: []
    }

    getCard = () => {
        if (this.state.remaining === 0) return alert('no more cards available')
        const drawApi = `https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/`
        console.log(drawApi)
        fetch(drawApi).then(res => res.json()).then(draw => {
            console.log(draw)
            this.setState(st => (
                {
                    cards: [...st.cards, draw.cards[0]],
                    remaining: draw.remaining
                }))
        })
    }

    renderCards = () => {
        return this.state.cards.map((c, index) => (
            <Card
                key={index}
                cardImg={c.image}
                name={`${c.value} of ${c.suit}`
                } />))
    }

    componentDidMount() {
        fetch(api).then(res => res.json()).then(d => {
            console.log(d)
            this.setState(
                {
                    deck_id: d.deck_id,
                    remaining: d.remaining
                })
        })
    }
    render() {
        return (
            <div className="CardDeck">
                <h1 className="CardDeck-title">Card Dealer</h1>
                <h2 className="CardDeck-title subtitle">Demo made with React</h2>
                <button className="CardDeck-btn" onClick={this.getCard}>Deal</button>
                <div className="CardDeck-cardContainer">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

export default CardDeck;