import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../Images/memory.jpg'
import img2 from '../../Images/tic-tac-toe.jpg'
import img3 from '../../Images/snake.jpg';

const Home = () => {
    return (
        <div className='container my-3'>
            <div className='text-bolder text-info'><h1>PlaY Game For Free</h1></div>
            <div class="container mt-3 row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Memory Game</h5>
                            <p class="card-text">Test Your Memory Power</p>
                            <NavLink to="/memoryGame"><button className='btn btn-warning rounded'>Play Now</button></NavLink>
                        </div>
                    </div>
                </div>
                <div class="col text-bolder">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Tic-Tac-Toe</h5>
                            <p class="card-text">Test Your Brain</p>
                            <NavLink to="/ticTakToe"><button className='btn btn-warning rounded'>Play Now</button></NavLink>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Snake Game</h5>
                            <p class="card-text">Refresh Your Mind</p>
                            <NavLink to="/snake"><button className='btn btn-warning rounded'>Play Now</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;