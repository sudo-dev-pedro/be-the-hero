import React from 'react';

import './style.css';

import heroesImage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    
    return (

        <div className="logon-container">

            <section className="form">
                <img src={logo} alt="logo" />
            </section>

            <img src={heroesImage} alt="heroesImage" />

        </div>
    );

}