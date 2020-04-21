import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi/';

import api from '../../services/api';

import './style.css';

import heroesImage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
    
    const [id, setId] = useState();
    const history = useHistory();

    async function logar(e) {

        e.preventDefault();

        try {

            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongNome', response.data.nome);

            history.push('/perfil');

        }catch(err) {
            
            alert('Falha no login! Tente novamente.');

        }
    }

    return (

        <div className="logon-container">
            <section className="form">

                <img 
                    src={logo} 
                    alt="Be The Hero" 
                />

                <form onSubmit={logar}>

                    <h1>Faça seu Login</h1>

                    <input 
                        placeholder="Sua ID"
                        value = {id}
                        onChange={e => setId(e.target.value)}
                    />
                    
                    <button 
                        className="button" 
                        type="submit">
                            Entrar
                    </button>

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