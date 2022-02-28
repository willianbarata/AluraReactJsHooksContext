import { TextField, Button } from "@material-ui/core";
import React, {useState} from "react";
import { useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";

function DadosUsuario({aoEnviar}){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha:{valido:true, texto:""}})
    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] =validacoes[name](value);
        setErros(novoEstado);
          
    }
    function possoEnviar(){
        for(let campo in erros){
           if(!erros[campo].valido) {
               return false;
           }
        }
        return true;
    }

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