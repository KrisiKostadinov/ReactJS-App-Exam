import React, { useEffect, useState } from 'react'
import { Spinner } from 'reactstrap';
import { getAllByUserIdCards, getAllCards } from '../config/models/cards';
import { Card } from './templates/Card';

export default function CardsList({
    userId = null
}) {

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                let snapshot;
                if (userId) {
                    snapshot = await getAllByUserIdCards(userId);
                } else {
                    snapshot = await getAllCards();
                }

                return snapshot;
            } catch (error) {
                console.log(error);
            }
        }

        getData().then((data) => { 
            setIsLoading(false);
            
            const cards = [];
            data.docs.map(doc => cards.push({ ...doc.data(), id: doc.id }));
            setCards(cards);
        });
    }, [userId]);

    return (
        <div className="container my-4">
            <title>All Cards</title>
            <div className="row">
                {cards.length > 0 ? cards.map(card =>
                    <Card key={card.id} card={card} />
                ) :
                    <div>
                        {isLoading ?
                            <Spinner /> :
                            <h2>No Cards</h2>}
                    </div>}
            </div>
        </div>
    );
}
