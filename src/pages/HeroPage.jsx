import React, { useState, useEffect } from "react";
import HeroInfo from "../components/HeroInfo/HeroInfo";

export default ({ id, heroes, loading }) => {
    return (
        <div className="container">
            <div className="heroPage">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="heroBox">
                        {heroes
                            .filter(hero => hero.name.slice(14) === id)
                            .map(hero => (
                                <HeroInfo hero={hero} key={id} />
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

