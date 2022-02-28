import { TextField, Button } from "@material-ui/core";
import React, {useState} from "react";
import { useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                id="email" 
                label="E-Mail" 
                name="email"
                type="email"
                required 
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField 
                value={senha}
                onChange={(event) => {setSenha(event.target.value)}}
                id="senha" 
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                label="Senha" 
                type="password"
                name="senha" 
                required 
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"> Próximo </Button>
        </form>
    );
}

export default DadosUsuario;