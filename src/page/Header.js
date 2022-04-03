import React from 'react';
import hlogo from '../assets/Highradius_Logo.svg';
import clogo from '../assets/companyLogo.svg';
import '../css/Header.css';

function Header() 
{
    return(
        <div className="header">
            <img className="clogo" src={clogo} alt=""/>
            <h1 className="clogo">ABC Products</h1>
            <img className="hlogo" src={hlogo} alt=""/>
        </div>        
    )
}

export default Header;
