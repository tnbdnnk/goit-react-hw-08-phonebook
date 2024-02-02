import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
    <div>
        <ThreeCircles 
            visible={true}
            height="200"
            width="200"
            color="#000000"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </div>
}

export default Loader;