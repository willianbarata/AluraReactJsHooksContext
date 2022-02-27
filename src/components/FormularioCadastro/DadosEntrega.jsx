import { TextField,Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";

function DadosEntrega({aoEnviar}){

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar({cep,endereco,numero,estado,cidade})
        }}>
            <TextField
                value={cep}
                onChange={(event) => {setCep(event.target.value)}}
                id="cep"
                label="CEP"
                type="number"
                name="cep"
                required
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={endereco}
                onChange={(event) => {setEndereco(event.target.value)}}
                id="endereco"
                label="Endereço"
                name="endereco"
                type="text"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={numero}
                onChange={(event) => {setNumero(event.target.value)}}
                id="numero"
                label="Número"
                name="numero"
                type="number"
                required
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={estado}
                onChange={(event) => {setEstado(event.target.value)}}
                id="estado"
                label="Estado"
                name="estado"
                type="text"
                required
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={cidade}
                onChange={(event) => {setCidade(event.target.value)}}
                id="cidade"
                label="Cidade"
                name="cidade"
                type="text"
                required
                variant="outlined"
                margin="normal"
            />
             <Button type="submit" variant="contained" color="primary" fullWidth> Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;