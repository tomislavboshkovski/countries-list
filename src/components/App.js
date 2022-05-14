import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import CountriesList from './CountriesList';
import DescendingOrder from './DescendingOrder';
import OceaniaCountries from './OceaniaCountries';
import SmallerThanLithuania from './SmallerThanLithuania';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://restcountries.com/v2/all?fields=name,region,area';
        setLoading(true);
        axios.get(apiUrl)
            .then(response => setCountries(response.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<CountriesList countries={countries} />} />
                    <Route path="/countries/descending-order" element={<DescendingOrder countries={countries} />} />
                    <Route path="/countries/oceania" element={<OceaniaCountries countries={countries} />} />
                    <Route path="/countries/smaller-than-lithuania" element={<SmallerThanLithuania countries={countries} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );   
};

export default App;
