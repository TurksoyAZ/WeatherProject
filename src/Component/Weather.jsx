import React from "react";

import './Weather.css'

function Weather({ city }) {
    const time = (parametr) => {
        const monate = [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "Semptember",
            "Oktober",
            "November",
            "Dezember",
        ];
        const tage = [
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
            "Sonntag",
        ];

        const tag = tage[parametr.getDay()];
        const monat = monate[parametr.getMonth()];
        const date = parametr.getDate();
        const jahr = parametr.getFullYear();

        return `${tag} / ${date} ${monat} / ${jahr}`;
    };

    return (
        <div className="box">
            <div className="box2">
                <p>
                    {city.name} {city.sys.country}
                </p>
                <p>{Math.floor(city.main.temp)} °C</p>
                <p>{city.weather[0].main}</p>
                <p> {time(new Date())} </p>
            </div>
        </div>
    );
}

export default Weather;
