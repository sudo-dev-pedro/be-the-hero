import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi/';

import './style.css';

import logo from '../../assets/logo.svg';

export default function NewIncident() {

    return(

        <div className="new-incident-container">
            <div className="content">
                <section>

                    <img 
                        src={logo} 
                        alt="Be The Hero" 
                    />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    
                    <Link className="back-link" to="/perfil"> 
                        <FiArrowLeft
                            size={16} 
                            color="#E02041" 
                        />
                        Voltar para o perfil
                    </Link>
                </section>

                <form>
                    
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descricao" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>

    );
}