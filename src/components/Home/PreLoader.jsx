import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span><img src="/ark_logo_loader.svg" alt="ark-logo" /> </span>

            </div>
        </div>
    );
};

export default PreLoader;