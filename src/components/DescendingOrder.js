import React from 'react';
import CountryCard from './CountryCard';
import CustomLink from './CustomLink';
import Header from './Header';

const DescendingOrder = ({ countries }) => {
    const ascending = countries.sort((a, b) => a.name.localeCompare(b.name));
    const descending = countries.reverse();

    const renderedList = descending.map(country => {
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
            <Header title="List of all countries (descending order)" />
            <CustomLink to="/countries/oceania" label="Countries in Oceania"></CustomLink>
            <CustomLink to="/countries/smaller-than-lithuania" label="Smaller than Lithuania"></CustomLink>
            <CustomLink to="/" label="Sort ascending" className="top-right"></CustomLink>
            <div>{renderedList}</div>
        </div>
    );
};

export default DescendingOrder;