import React from "react";
import HeroItem from "../HeroItem/HeroItem";
import "./HeroTable.sass";
import strImg from "../../media/icon/str.png";
import agiImg from "../../media/icon/agi.png";
import intImg from "../../media/icon/int.png";
import Loader from "../Loader/Loader";

export default ({ heroes, loading }) => {
    return (
        <div className="heroTable">
            {loading ? (
                <Loader />
            ) : (
                <div className="heroRow">
                    <div className="heroCol">
                        <div className="title">
                            {" "}
                            <img src={strImg} alt="strImg" /> Strength
                        </div>
                        <div className="heroBox">
                            {heroes
                                .filter((hero) => hero.primary_attr === "str")
                                .map((hero) => (
                                    <HeroItem hero={hero} key={hero.id} />
                                ))}
                        </div>
                    </div>
                    <div className="heroCol">
                        <div className="title">
                            {" "}
                            <img src={agiImg} alt="agiImg" /> Agility
                        </div>
                        <div className="heroBox">
                            {heroes
                                .filter((hero) => hero.primary_attr === "agi")
                                .map((hero) => (
                                    <HeroItem hero={hero} key={hero.id} />
                                ))}
                        </div>
                    </div>
                    <div className="heroCol">
                        <div className="title">
                            {" "}
                            <img src={intImg} alt="intImg" /> Intelligence
                        </div>
                        <div className="heroBox">
                            {heroes
                                .filter((hero) => hero.primary_attr === "int")
                                .map((hero) => (
                                    <HeroItem hero={hero} key={hero.id} />
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
