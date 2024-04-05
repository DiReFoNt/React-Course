import React from "react";
import imgAbout from "../styles/img/about.jpg";

const About = () => {
    return (
        <div>
            <h1>This app is designed as a learning experience</h1>
            <img
                style={{ width: 750, height: 550 }}
                src={imgAbout}
                alt="error404"
            />
        </div>
    );
};

export default About;
