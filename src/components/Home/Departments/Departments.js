import React, { useEffect, useState } from 'react';
import SingleDepartment from '../SingleDepartment/SingleDepartment';
import './Depaerments.css'



const Department = () => {

    const [departments, setDepartments] = useState([])
    useEffect(() => {
        fetch('department.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])

    return (
        <div id="department" className="mt-5">
            <h1 className="text-success">Departments</h1>

            <div className="dep-container">
                {
                    departments.map(department => <SingleDepartment
                        key={department.id}
                        department={department}
                    ></SingleDepartment>)
                }
            </div>
        </div>
    );
};

export default Department;