// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo-santos.png'
import axios from 'axios'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numeroCamisa, setNumeroCamisa] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {nome, sexo, idade, altura, peso, posicao, numeroCamisa})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setSexo('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setNumeroCamisa('')

        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            <h2>Cadastro de jogadores</h2>
            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}} className="formulario">
                <form className="inputs">
                    <input 
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        class name="input-nome"
                    />
                    <input 
                        type="sexo"
                        id="sexo"
                        placeholder="Sexo"
                        value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                        required
                        className="input-sexo"
                    />
                    <input 
                        type="idade"
                        id="idade"
                        placeholder="Idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        required
                        className="input-idade"
                    />
                    <input
                        type="altura"
                        id="altura"
                        placeholder="Altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                        className="input-altura"
                    />
                    <input
                        type="peso"
                        id="peso"
                        placeholder="Peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                        className="input-peso"
                    />
                    <input
                        type="posicao"
                        id="posicao"
                        placeholder="Posição"
                        value={posicao}
                        onChange={(e) => setPosicao(e.target.value)}
                        required
                        className="input-posicao"
                    />
                    <input
                        type="numeroCamisa"
                        id="numeroCamisa"
                        placeholder="Número da Camisa"
                        value={numeroCamisa}
                        onChange={(e) => setNumeroCamisa(e.target.value)}
                        required
                        className="input-numeroCamisa"
                    />
                </form>
                <button type="submit">Cadastrar</button>
            </form>
            <button onClick={() => navigate('/usuarios')} className="link-usuarios">
                Ver usuários cadastrados
            </button>

            <MensagemFeedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onclose={fecharMensagem}
            />
        </div>
    )
}

export default FormularioCadastro