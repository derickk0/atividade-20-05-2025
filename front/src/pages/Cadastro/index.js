// src\pages\Cadastro\index.js

import FormularioCadastro from '../../components/FormularioCadastro'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import background from '../../assets/images/background-vila.jpg'

function PaginaCadastro() {
    return (
        <div className='pagina-cadastro'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <FormularioCadastro/>
        </div>
    )
}

export default PaginaCadastro