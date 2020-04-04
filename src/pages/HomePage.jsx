import React, { useState, useEffect } from "react";
import HeroTable from '../components/HeroTable/HeroTable'

export default ({heroes,loading}) => {
    return (
        <HeroTable heroes={heroes} loading={loading} />
    );
};