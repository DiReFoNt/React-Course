import React from "react";
import imgError from "../styles/img/404img.jpg";

const Error = () => {
    return <div>
        <img style={{width: 750, height: 750}} src={imgError} alt="error404" />
    </div>;
};

export default Error;
