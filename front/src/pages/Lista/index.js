// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import background from '../../assets/images/background-vila.jpg'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
    return (
        <div className='pagina-lista-usuarios'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <div className='container'>
                <h2>Lista de usuários</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar jogador
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios