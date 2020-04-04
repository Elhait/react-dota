import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./HeroItem.sass"

export default ({ hero }) => {
    return (
        <div className="heroItem">
            <Link className="link" to={`/heroes/${hero.name.slice(14)}`}>
            {/* <Link className="link" to={`/${hero.id}`}> */}
            {/* <div className="hero_title">{hero.localized_name}</div> */}
            <img
                className="hero_img"
                src={`https://api.opendota.com${hero.img}`}
                alt={hero.localized_name}
            />

            </Link>
        </div>

    );
};
