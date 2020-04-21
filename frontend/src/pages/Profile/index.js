import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './style.css';

import logo from '../../assets/logo.svg';

export default function Profile() {
    
    const ongNome = localStorage.getItem('ongNome');

    return(

        <div className="profile-container">
            <header>

                <img 
                    src={logo} 
                    alt="Be The Hero" 
                />

                <span>Bem vindo(a), {ongNome} </span>

                <Link 
                    className="button" 
                    to="/caso/novo">Cadastar novo caso
                </Link>
                
                <button type="button">
                    <FiPower 
                        size={18} 
                        color="#E02041" 
                    />
                </button>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120,00</p>

                    <button className="" type="button">
                        <FiTrash2 
                            size={20} 
                            color="a8a8b3"
                        />
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p>Teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120,00</p>

                    <button className="" type="button">
                        <FiTrash2 
                            size={20} 
                            color="a8a8b3"
                        />
                    </button>
                </li>

                <li>
                    <strong>CASO: </strong>
                    <p>Teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120,00</p>

                    <button className="" type="button">
                        <FiTrash2 
                            size={20} 
                            color="a8a8b3"
                        />
                    </button>
                </li>
                
                <li>
                    <strong>CASO: </strong>
                    <p>Teste</p>

                    <strong>DESCRICAO: </strong>
                    <p>Teste</p>

                    <strong>VALOR: </strong>
                    <p>R$ 120,00</p>

                    <button className="" type="button">
                        <FiTrash2 
                            size={20} 
                            color="a8a8b3"
                        />
                    </button>
                </li>

            </ul>

        </div>

    );

}