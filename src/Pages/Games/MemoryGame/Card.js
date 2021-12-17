import React from 'react';
import './Card.css'

const Card = ({ item, handleChoice, flipped }) => {
    const itemClass = flipped ? "flipped" : ""
    return (
        <div>
            <div className="col">
                <div onClick={() => handleChoice(item)} className={`cards h-100 card ${itemClass}`}>
                    <img style={{ height: "120px" }} src={item.img} class="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Card;