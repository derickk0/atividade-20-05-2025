// src\components\TelaInicial\index.js

import './styles.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-santos.png'
import background from '../../assets/images/background-vila.jpg'

function TelaInicial() {
    const navigate = useNavigate()

    return (
        <div className='tela-inicial'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <div className='container'>
                <img src={logo} alt="Logo do Santos" />
                <h1>Santos FC</h1>
                <button onClick={() => navigate('/cadastro')} className='link-registrar-usuario'>
                        Cadastrar jogador
                </button>
                <button onClick={() => navigate('/usuarios')} className='link-usuarios'>
                        Lista de jogadores
                </button>
            </div>
        </div>
    )
}

export default TelaInicial