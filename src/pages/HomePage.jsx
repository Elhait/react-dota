import React, { } from "react";
import HeroTable from "../components/HeroTable/HeroTable";

export default ({ heroes, loading }) => {
    return (
        <main className="mainPage">
            <HeroTable heroes={heroes} loading={loading} />
        </main>
    );
};
