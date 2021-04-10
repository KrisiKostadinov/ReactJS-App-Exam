import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({ card }) => {
    return (
        <div key={card.id} className="card col-md-4 d-flex justify-content-center my-2">
            <img className="card-img-top w-100" src={card.url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content.length > 100 ?
                    card.content.slice(0, 100) + '...' :
                    card.content}</p>
                <NavLink to={`/details/${card.id}`} className="btn btn-primary">Details</NavLink>
            </div>
        </div>)
}