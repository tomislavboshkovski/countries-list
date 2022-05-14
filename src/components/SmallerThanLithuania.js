import React from 'react';
import CountryCard from './CountryCard';
import CustomLink from './CustomLink';
import Header from './Header';

const SmallerThanLithuania = ({ countries }) => {

    const renderedList = countries.map(country => {
        const area = parseInt(country.area);
            if (area < 65300) {
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
            <Header title="List of countries that are smaller than Lithuania" />
            <CustomLink to="/" label="Back to all Countries" className="btn-alone"></CustomLink>
            <div>{renderedList}</div>
        </div>
    );
};

export default SmallerThanLithuania;