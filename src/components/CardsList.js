import React, { useEffect, useState } from 'react'
import { getAllByUserIdCards, getAllCards } from '../config/models/cards';
import { Card } from './templates/Card';

export default function CardsList({
    userId = ''
}) {

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        try {
            let snapshot;
            if (userId != '') {
                snapshot = await getAllByUserIdCards(userId);
            } else {
                snapshot = await getAllCards();
            }
            setIsLoading(false);
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
                    <Card card={card} />
                ) :
                    <div>
                        {isLoading ?
                            <h2>Loading...</h2> :
                            <h2>No Cards</h2>}
                    </div>}
            </div>
        </div>
    );
}
