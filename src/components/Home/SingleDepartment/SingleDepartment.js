import React from 'react';

const SingleDepartment = ({ department }) => {
    const { dname, desc, img } = department;
    return (
        <div>
            <div class="card">
                <img width="550px" height="400px" src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{dname}</h5>
                    <p class="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Know More</a>
                </div>
            </div>
        </div>

    );
};
export default SingleDepartment;