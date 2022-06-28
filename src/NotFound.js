import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className={"not-found"}>
            <h2>Sorry</h2>
            <p>This page doesn't exist</p>
            <Link to={'/'}>Click here to home page...</Link>
        </div>
    );
}

export default NotFound;