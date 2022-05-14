import React from 'react';
import { Link } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ to, label, className }) => {
    return <Link className={`custom-link ${className}`} to={to}>{label}</Link>;   
};

export default CustomLink;