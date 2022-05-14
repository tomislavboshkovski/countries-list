import React from 'react';
import CountryCard from './CountryCard';
import CustomLink from './CustomLink';
import Header from './Header';

const OceaniaCountries = ({ countries }) => {

    const renderedList = countries.map(country => {
        if (country.region === "Oceania") {
            return (
                <CountryCard
                    key={country.name}
                    name={country.name}
                    region={country.region}
                    area={country.area}
                />
            );
        } return;
    });

    return (
        <div>
            <Header title="List of all countries in Oceania" />
            <CustomLink to="/" label="Back to all Countries" className="btn-alone"></CustomLink>
            <div>{renderedList}</div>
        </div>
    );
};

export default OceaniaCountries;