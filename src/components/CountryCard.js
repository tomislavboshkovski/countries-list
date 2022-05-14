import React from 'react';
import CountriesList from './CountriesList';
import './CountryCard.css';

const CountryCard = ({ name, region, area }) => {
    return (
        <div className="country-card">
            <h4>Name: {name}</h4>
            <p>Region: {region}</p>
            <p>Area: {area} km²</p>
        </div>
    );
};

export default CountryCard;