import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

import './style.css';

import logo from '../../assets/logo.svg';

export default function Profile() {
    
    const [casos, setCasos] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongNome = localStorage.getItem('ongNome');

    const history = useHistory();

    //Terei uma funcao sendo executada uma única vez
    useEffect(() => {
        api.get('perfil', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setCasos(response.data);
        })
    }, [ongId]);

    async function deletarCaso(id) {

        try {

            await api.delete(`casos/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            alert('Caso deletado com sucesso!');
            setCasos(casos.filter(caso => caso.id !== id));

        }catch(err) {
            alert('Erro ao deletar caso! Tente novamente.');
        }
    }

    async function deslogar() {
        localStorage.clear();

        history.push('/');
    }

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
                
                <button onClick={deslogar} type="button">
                    <FiPower 
                        size={18} 
                        color="#E02041" 
                    />
                </button>

            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {casos.map(caso =>(

                    <li key={caso.id}>
                        <strong>CASO: </strong>
                        <p>{caso.titulo}</p>

                        <strong>DESCRICAO: </strong>
                        <p>{caso.descricao}</p>

                        <strong>VALOR: </strong>
                        <p>
                            {Intl.NumberFormat('PT-BR', 
                                {
                                    style: 'currency', 
                                    currency: 'BRL'
                                }
                                ).format(caso.valor)}
                        </p>

                        <button onClick={() => deletarCaso(caso.id)} type="button">
                            <FiTrash2 
                                size={20} 
                                color="a8a8b3"
                            />
                        </button>

                    </li>

                ))}

            </ul>

        </div>

    );

}