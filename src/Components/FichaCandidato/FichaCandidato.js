import { Ficha, Candidatos } from './styled';
import { ButtonPrimario } from '../../styles';
import axios from 'axios';

function FichaCandidato(props) {
  const token = localStorage.getItem('token');
  const idViagem = props.viagemId;

  const decisaoCandidato = (idCandidato, veredito) => {
    const body = {
      approve: veredito
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah/trips/${idViagem}/candidates/${idCandidato}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((success) => {
      console.log(success.data, 'Veredito enviado com sucesso')
      props.vereditoDisparado();
    })
    .catch((error) => {
      console.log(error.response.data.message)
    })
  }

  const listaCandidatos = props.candidatos.map((candidato) => {
    return(
      <Ficha key={candidato.id}>  
        <p>Nome: {candidato.name}</p>
        <p>Profissão: {candidato.profession}</p>
        <p>Idade: {candidato.age} anos</p>
        <p>País: {candidato.country}</p>
        <p>{candidato.applicationText}</p>
        <ButtonPrimario onClick={() => decisaoCandidato(candidato.id, true)}>Aprovar</ButtonPrimario>
        <ButtonPrimario onClick={() => decisaoCandidato(candidato.id, false)}>Reprovar</ButtonPrimario>
      </Ficha>
    )
  })

  return (
    <Candidatos>
      {props.candidatos.length > 0 ? listaCandidatos : <p>Nenhum candidato para analisar</p>}
    </Candidatos>
  );
}
  
export default FichaCandidato;