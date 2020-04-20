import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi/';

import './style.css';

import heroesImage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    
    return (

        <div className="logon-container">
            <section className="form">

                <img 
                    src={logo} 
                    alt="Be The Hero" 
                />

                <form>
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID"/>
                    
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/registrar"> 
                        <FiLogIn 
                            size={16} 
                            color="#E02041" 
                        />
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img 
                src={heroesImage} 
                alt="heroesImage" 
            />

        </div>
    );

}