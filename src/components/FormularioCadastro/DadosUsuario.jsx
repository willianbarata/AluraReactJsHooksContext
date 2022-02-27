import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}){
    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField id="email" label="E-Mail" type="email" required variant="outlined"
        margin="normal"
        fullWidth/>
            <TextField id="senha" label="Senha" type="password" required variant="outlined"
        margin="normal"
        fullWidth/>
            <Button type="submit" variant="contained" color="primary"> Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;