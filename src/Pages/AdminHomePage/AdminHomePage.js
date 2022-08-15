import { Botoes, Titulo } from './styled'
import { ButtonPrimario } from '../../styles';
import AmdViagens from '../../Components/AdmViagens/AdmViagens';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminHomePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const goToCreateTrip = () => {
    navigate('/criar-viagem')
  }

  const goBack = () => {
    navigate('/')
  }

  useEffect(() => {
    if(token === null) {
      navigate('/login')
    }
  },[navigate, token]);

  return (
    <div>  
      <Titulo> Painel Administrativo </Titulo>
      <AmdViagens/>
      <Botoes>
        <ButtonPrimario onClick={goToCreateTrip}>Criar Viagem</ButtonPrimario>
        <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
      </Botoes>
    </div>
  );
}

export default AdminHomePage;