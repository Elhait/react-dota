import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, HashRouter, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import config from "./config/config.json";
// import HeroTable from "./components/HeroTable/HeroTable";
import "./styles/styles.sass";
import HomePage from "./pages/HomePage";
import HeroPage from "./pages/HeroPage";

const OPENDOTA_API = config.OPENDOTA_API;
const HERO_STATS = "/heroStats";

const useFetch = url => {
    const [heroes, setHeroes] = useState(null);
    const [loading, setLoading] = useState(true);
    
    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setHeroes(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, heroes };
};

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={routeCodes.HOME} component={Home} />
                    <Route exact path={routeCodes.HERO} component={Hero} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;

const publicPath = "/";

export const routeCodes = {
    HOME: publicPath,
    HERO: `${publicPath}heroes/:id`,
};

function Home() {
    const { heroes, loading } = useFetch(OPENDOTA_API + HERO_STATS);
    return <HomePage heroes={heroes} loading={loading} />;
}

function Hero() {
    const {id} = useParams()
    const { heroes, loading } = useFetch(OPENDOTA_API + HERO_STATS);
    return <HeroPage id={id} heroes={heroes} loading={loading}/>;
}
