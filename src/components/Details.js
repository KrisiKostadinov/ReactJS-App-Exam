import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

export const Details = ({
    history
}) => {

    const { id } = useParams();

    const [card, setCard] = useState({});

    useEffect(() => {
        fetch('http://localhost:3030/cards/' + id)
            .then(res => res.json())
            .then(card => setCard(card));
    }, []);

    function handleDeleteCard() {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (<div className='fixed-top bg-light w-25 mx-auto p-4 shadow'>
                    <h1>Are you sure?</h1>
                    <p>You want to delete this card?</p>
                    <button className="btn btn-primary" onClick={onClose}>No</button>
                    <button className="mx-2 btn btn-danger"
                        onClick={() => {
                            handleClickDelete();
                            onClose();
                        }}
                    >
                        Yes, Delete it!
                </button>
                </div>)
            }
        });

        function handleClickDelete() {
            fetch('http://localhost:3030/cards/' + id, {
                method: 'delete'
            })
            .then(data => {
                return history.push('/');
            });
        }
    }

    return (
        <div className="container">
            <div className="card w-100">
                <div className="row">
                    <img className="card-img-top col-md-4" src={card.url} alt="Card image cap" />
                    <div className="card-body col-md-8">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.content}</p>
                        <NavLink className="btn btn-warning" to={`/edit/${card.id}`}>Edit</NavLink>
                        <button className="mx-2 btn btn-danger" onClick={handleDeleteCard}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
