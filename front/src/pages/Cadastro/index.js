// src\pages\Cadastro\index.js

import FormularioCadastro from '../../components/FormularioCadastro'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaCadastro() {
    return (
        <div className='pagina-cadastro'>
            <FormularioCadastro/>
        </div>
    )
}

export default PaginaCadastro