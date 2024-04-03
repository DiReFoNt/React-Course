import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <TailSpin
            height="150"
            width="150"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                marginTop: 100
            }}
            wrapperClass=""
            visible={true}
        />
    );
};

export default Loader;
