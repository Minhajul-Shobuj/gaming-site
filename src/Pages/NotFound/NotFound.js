import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Images/3973481.jpg';

const NotFound = () => {
    return (
        <div>
            <h3 className='text-danger my-5'>No Result Found</h3>
            <div> <img style={{ height: "500px", width: "500px" }} src={img} alt="" /></div>
            <NavLink to="/home"><button className='btn btn-danger'>Back Home</button></NavLink>
        </div>
    );
};

export default NotFound;