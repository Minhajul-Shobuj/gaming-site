import React, { useEffect, useState } from 'react';
import Card from './Card';

const cardImages = [
    { "img": "/img/html.png", matched: false },
    { "img": "/img/css.png", matched: false },
    { "img": "/img/js.png", matched: false },
    { "img": "/img/scss.png", matched: false },
    { "img": "/img/react.png", matched: false },
    { "img": "/img/angular.png", matched: false },
    { "img": "/img/vue.png", matched: false },
    { "img": "/img/nodejs.png", matched: false }
];

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));
        setCards(shuffledCards)
        setTurns(0)
    }
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    };
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.img === choiceTwo.img) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.img === choiceOne.img) {
                            return { ...card, matched: true }
                        }
                        else {
                            return card
                        }
                    })
                })
                resetTurn()
            }
            else {
                setTimeout(resetTurn(), 1000)
            }
        }

    }, [choiceOne, choiceTwo]);
    console.log(cards)
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }
    return (
        <div >
            <button className='btn text-bold btn-info' onClick={shuffleCards}>New Game</button>
            <div className='memory-game container mt-3 mb-2 p-4 rounded'>
                <div class="row row-cols-3 row-cols-md-4 g-2">
                    {cards.map(item => <Card item={item}
                        handleChoice={handleChoice}
                        flipped={item === choiceOne || item === choiceTwo || item.matched}
                        key={item.id} />)}
                </div>
            </div>
        </div>
    );
};

export default Cards;