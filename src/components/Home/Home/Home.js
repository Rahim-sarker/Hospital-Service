import React from 'react';
import Appoinments from '../Appoinments/Appoinments';
import Banner from '../Banner/Banner';
import Department from '../Departments/Departments';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Department></Department>
            <Appoinments></Appoinments>
        </div>
    );
};

export default Home;