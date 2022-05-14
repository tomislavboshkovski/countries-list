import React from 'react';
import CountryCard from './CountryCard';
import CustomLink from './CustomLink';
import Header from './Header';

const CountriesList = ({ countries }) => {
    
    const renderedList = countries.map(country => {
        const ascending = countries.sort((a, b) => a.name.localeCompare(b.name));
        return (
          <CountryCard
            key={country.name}
            name={country.name}
            region={country.region}
            area={country.area}
          />
        );
    });

    return (
        <div>
            <Header title="List of all countries (ascending order)" />
            <CustomLink to="/countries/oceania" label="Countries in Oceania"></CustomLink>
            <CustomLink to="/countries/smaller-than-lithuania" label="Smaller than Lithuania"></CustomLink>
            <CustomLink to="/countries/descending-order" label="Sort descending" className="top-right"></CustomLink>
            <div>{renderedList}</div>
        </div>
    );
};

export default CountriesList;