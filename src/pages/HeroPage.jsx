import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroInfo from "../components/HeroInfo/HeroInfo";
import Loader from "../components/Loader/Loader";

export default ({ id, heroes, loading }) => {
    return (
        <main>
            <div className="container">
                <div className="heroPage">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="heroBox">
                            {heroes
                                .filter((hero) => hero.name.slice(14) === id)
                                .map((hero) => (
                                    <HeroInfo hero={hero} key={id} />
                                ))}
                            <br />
                            <Link to="/" className="btn-back">
                                Back
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};
