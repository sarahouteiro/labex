import { Titulo, Infos, Lista } from './styled';
import FichaCandidato from '../../Components/FichaCandidato/FichaCandidato';
import { ButtonPrimario } from '../../styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TripDetailsPage() {

  const [ viagem, setViagem ] = useState({
    approved: [],
    candidates: []
  });

  const navigate = useNavigate();
  const params = useParams();

  const token = localStorage.getItem('token');

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    if(token === null) {
      navigate('/login')
    }
  },[navigate, token]);

  const getTripDetails = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah/trip/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then((success) => {
        console.log(success.data, 'Dados de viagem, obtidos com sucesso');
        setViagem(success.data.trip)
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetails();
  }, []);

  const atualizarCandidatos = () => {
    getTripDetails();
  }

  const listaDeAprovados = viagem.approved.map((aprovado) => {
    return(
      <p key={aprovado.key}>{aprovado.name}</p>
    )
  })

  return (
    <div>  
      <Titulo> Viagem </Titulo>
      <Infos>Nome: {viagem.name}</Infos>
      <Infos>Descrição: {viagem.description}</Infos>
      <Infos>Planeta: {viagem.planet}</Infos>
      <Infos>Duração: {viagem.durationInDays} dias</Infos>
      <Infos>Data: {viagem.date}</Infos>

      <Titulo> Candidatos Pendentes </Titulo>
      <FichaCandidato viagemId={params.id} candidatos={viagem.candidates} vereditoDisparado={atualizarCandidatos}/>

      <Titulo> Candidatos Aprovados </Titulo>
        <Lista>
          {viagem.approved.length > 0 ? listaDeAprovados : <p>Nenhum candidato aprovado ainda..</p>}
        </Lista>
        <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
    </div>
  );
}
  
export default TripDetailsPage;