import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="container d-flex bg-secondary text-warning rounded my-5 justify-content-center">
                <div><p>We provide you free games that can help you to refresh yourself <Link to="/about">more</Link> </p>
                    <h6>Email: gamerguyz@gmail.com</h6>
                    <h6>Mobile: 01700500000</h6>
                    <small className="text-danger">© All right reserved gamerguyz.com</small></div>
            </div>
        </div>
    );
};

export default Footer;