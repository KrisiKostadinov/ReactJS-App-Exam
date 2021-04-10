import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { getAllByUserIdCards, getAllCards } from '../config/models/cards';

export default function CardsList({
    userId = ''
}) {

    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
            let snapshot;
            if (userId != '') {
                snapshot = await getAllByUserIdCards(userId);
            } else {
                snapshot = await getAllCards();
            }

            const cards = [];
            snapshot.docs.map(doc => cards.push({ ...doc.data(), id: doc.id }));
            setCards(cards);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className="container my-4">
            <div className="row">
                {cards.length > 0 ? cards.map(card =>
                    <div key={card.id} className="card col-md-3 w-25">
                        <img className="card-img-top" src={card.url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.content}</p>
                            <NavLink to={`/details/${card.id}`} className="btn btn-primary">Details</NavLink>
                        </div>
                    </div>) :
                    <div>
                        <h2>No Cards</h2>
                    </div>}
            </div>
        </div>
    );
}
