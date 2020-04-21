import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi/';

import api from '../../services/api';

import './style.css';

import logo from '../../assets/logo.svg';

export default function Register() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWpp] = useState('');
    const [cidade, setCidade] = useState('');
    const [UF, setUF] = useState('');

    const history = useHistory();

    async function criarUsuario (e) {
        
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            cidade,
            UF,
        };

        console.log(data);

        try {

            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso é: ${response.data.id}`);

            history.push('/');
            
        }catch (err) {

            alert('Erro no cadastro! Tente novamente.');

        }

    }

    return(

        <div className="register-container">
            <div className="content">
                <section>

                    <img 
                        src={logo} 
                        alt="Be The Hero" 
                    />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <Link className="back-link" to="/"> 
                        <FiArrowLeft
                            size={16} 
                            color="#E02041" 
                        />
                        Nao tenho cadastro
                    </Link>
                </section>

                <form onSubmit={criarUsuario}>
                    
                    <input 
                        value={nome}
                        onChange={ e => setNome(e.target.value)}
                        placeholder="Nome da ONG" 
                    />

                    <input 
                        type="email" 
                        placeholder="E-Mail" 
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={ e => setWpp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={cidade}
                            onChange={ e => setCidade(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            value={UF}
                            onChange={ e => setUF(e.target.value)} 
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );

}