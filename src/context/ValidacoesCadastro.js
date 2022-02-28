import React from "react";
import { validarCPF, validarSenha } from "../models/Cadastro";

const ValidacoesCadastro = React.createContext(
    {cpf: semValidacao, senha: semValidacao, nome: semValidacao}
);

function semValidacao(dados){
        console.log(dados);
        return {valido: true, texto: ""}
}

export default ValidacoesCadastro;