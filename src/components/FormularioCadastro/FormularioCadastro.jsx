import { StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({aoEnviar}) {
  
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(()=> {
    if(etapaAtual === formularios.length-1){
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado Pelo Cadastro</Typography>
  ]

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo(){
    setEtapaAtual(etapaAtual +1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual} >
        <Step>
          <StepLabel>Login</StepLabel> 
        </Step>
        <Step>
            <StepLabel>Dados Pessoais</StepLabel> 
        </Step>
        <Step>
            <StepLabel>Entrega</StepLabel> 
        </Step>
        <Step>
           <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
    );
}

export default FormularioCadastro;
