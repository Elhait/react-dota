import React from "react";
import "./HeroInfo.sass";
import atackIcon from "../../media/icon/attack.png";
import speedIcon from "../../media/icon/speed.png";
import defenseIcon from "../../media/icon/defense.png";
import strIcon from "../../media/icon/str.png";
import agiIcon from "../../media/icon/agi.png";
import intIcon from "../../media/icon/int.png";

export default ({ hero }) => {
    return (
        <div className="heroInfo">
            <div className="top">
                <div className="box left">
                    <img
                        className="img"
                        src={`https://api.opendota.com${hero.img}`}
                        alt={hero.localized_name}
                    />
                    <div className="title">{hero.localized_name}</div>
                </div>
                <div className="box right">
                    <div className="attack_type">
                        Attack type: {hero.attack_type}
                    </div>
                    <div className="attack_type">
                        Roles: {hero.roles.join(" , ")}
                    </div>
                </div>
            </div>
            <div className="bot">
                <div className="left">
                    <div className="stats">
                        <div className="stats_left">
                            <img src={atackIcon} alt="atackIcon" />
                        </div>
                        <div className="stats_right">
                            {hero.base_attack_min} - {hero.base_attack_max}
                        </div>
                    </div>
                    <div className="stats">
                        <div className="stats_left">
                            <img src={strIcon} alt="strIcon" />
                        </div>
                        <div className="stats_right">{hero.base_str}</div>
                    </div>
                    <div className="stats">
                        <div className="stats_left">
                            <img src={defenseIcon} alt="defenseIcon" />
                        </div>
                        <div className="stats_right">{hero.base_armor}</div>
                    </div>
                    <div className="stats">
                        <div className="stats_left">
                            <img src={agiIcon} alt="agiIcon" />
                        </div>
                        <div className="stats_right">{hero.base_agi}</div>
                    </div>
                    <div className="stats">
                        <div className="stats_left">
                            <img src={speedIcon} alt="speedIcon" />
                        </div>
                        <div className="stats_right">{hero.move_speed}</div>
                    </div>
                    <div className="stats">
                        <div className="stats_left">
                            <img src={intIcon} alt="intIcon" />
                        </div>
                        <div className="stats_right">{hero.base_int}</div>
                    </div>
                </div>
                <div className="right">
                    <div className="stats">Health: {hero.base_health}</div>
                    <div className="stats">
                        Health regen: {hero.base_health_regen}
                    </div>
                    <div className="stats">Mana: {hero.base_mana}</div>
                    <div className="stats">
                        Mana regen: {hero.base_mana_regen}
                    </div>
                </div>
            </div>
        </div>
    );
};
