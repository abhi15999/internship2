import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const NotFound = () => {
    return (
        <React.Fragment>
            { Title('Page Not Found') }
            <div className="container">
                <div id="home" className="row mt-5 px-1 py-5">
                    <div className="shadow-sm p-1 my-5 col-12 text-center">
                        <h1>404</h1>
                        <p>Error Occured! Page Not Found.</p>
                    </div>
                    <div className="col-12 text-center">
                        <Link to="/">
                            <button className="btn btn-sm btn-primary">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default NotFound;