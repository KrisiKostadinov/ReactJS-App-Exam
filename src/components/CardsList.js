import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class CardsList extends Component {

    constructor() {
        super()

        this.state = { cards: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3030/cards')
            .then(res => res.json())
            .then(cards => this.setState({ cards }));
    }

    render() {
        return (
            <div className="container my-4">
                <div className="row">
                    {this.state.cards.map(card =>
                        <div key={card.id} className="card col-md-3 w-25">
                            <img className="card-img-top" src={card.url} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.content}</p>
                                <NavLink to={`/details/${card.id}`} className="btn btn-primary">Details</NavLink>
                            </div>
                        </div>)}
                </div>
            </div>
        )
    }
}
