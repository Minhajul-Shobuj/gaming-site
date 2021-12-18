import React from 'react';
import img from '../../../Images/coming soon.jpg'

const TicTakToe = () => {
    return (
        <div>
            <div className="my-5">
                <img style={{ width: "300px", height: "300px" }} src={img} alt="" />
            </div>
        </div>
    );
};

export default TicTakToe;