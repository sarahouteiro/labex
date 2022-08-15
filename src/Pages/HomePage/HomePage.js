import banner from '../../Assets/banner.jpg';
import { Banner, Botoes } from './styled';
import { ButtonPrimario } from '../../styles';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate()

  const goToTripsPage = () => {
    navigate('lista-de-viagens')
  }

  const goToLoginPage = () => {
    navigate('Login')
  }

    return (
      <div>  
        <Banner src={banner} alt='Foto de um Mundo' />
        <Botoes>
          <ButtonPrimario onClick={goToTripsPage}>Ver Viagens</ButtonPrimario>
          <ButtonPrimario onClick={goToLoginPage}>Área Admin</ButtonPrimario>
        </Botoes>
      </div>
    );
  }
  
  export default HomePage;