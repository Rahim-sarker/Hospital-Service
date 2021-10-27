import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {

    const { id, img, serviceName, Time, description } = service;
    return (
        <div className="service-area text-dark col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h2>{serviceName}</h2>
            <h3>{Time}</h3>
            <p>{description}</p>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-success m-3">Book For Service</button>
            </Link>
        </div>
    );
};

export default Service;