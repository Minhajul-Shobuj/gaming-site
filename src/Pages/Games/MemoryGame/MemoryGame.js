import React from 'react';
import Cards from './Cards';
import './MemoryGame.css'

const MemoryGame = () => {
    return (
        <div className='container mt-4'>
            <h1 className='fw-bolder'>Memory Game</h1>
            <Cards></Cards>
        </div>
    );
};

export default MemoryGame;