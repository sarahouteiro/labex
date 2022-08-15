import { Titulo, Botoes } from './styled'
import BoxViagem from '../../Components/BoxViagem/BoxViagem';
import { ButtonPrimario } from '../../styles'
import { useNavigate } from 'react-router-dom';

function ListTripsPage() {
  const navigate = useNavigate()

    const goToApplicationFormPage = () => {
      navigate('/inscricao')
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div>  
        <Titulo>Veja nossas viagens aqui</Titulo>
        <BoxViagem/>
        <Botoes>
          <ButtonPrimario onClick={goToApplicationFormPage}>Inscrever-se</ButtonPrimario>
          <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
        </Botoes>
      </div>
    );
  }
  
  export default ListTripsPage;