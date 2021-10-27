import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Servicess.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="mt-5">
            <h1 className="text-success">Our Services</h1>

            <div className="services-Container ms-5 mt-3">
                {
                    services.map(service => <Service
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;
