import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';


import './styles.css'

import logo from '../../assets/logo.png';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">

                <header>
                    <img src={logo} alt="corona" />
                </header>

                <main>
                    <h1>Mapa de monitoramento da Covid-19.</h1>
                    <p>Ajudamos os municípios do Paraná a monitorar e mapear os casos confirmados e
                    suspeitos da Covid-19, em tempo real em um mapa interativo, para que possam
                        traçar suas estratégias de controle de forma mais eficiêntes.</p>
                    <Link to="/create-point">
                        <span><FiLogIn></FiLogIn></span>
                        <strong>Cadastrar um Caso</strong>
                    </Link>
                </main>

            </div>
        </div>
    )
}

export default Home;