import React from "react";
import {Link} from 'react-router-dom';

const HomePage2 = () => (
    <div className={"jumbotron"}>
        <h1>My Redux Page</h1>
        <p>Learning redux</p>
        <Link to={"about"} className={"btn btn-primary btn-lg"}>
            Learn more
        </Link>
    </div>
);

export default HomePage2;