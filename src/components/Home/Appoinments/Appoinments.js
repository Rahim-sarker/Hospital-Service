import React from 'react';


const Appoinments = () => {
    return (

        <div id="appoinment" className="row m-5">
            <h1>Book Appoinment</h1>
            <div className="col-lg-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Ages</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>

            </div>
            <div className="col-lg-6">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Describe Your Disease</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>
        </div>

    );
};

export default Appoinments;