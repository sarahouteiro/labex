import Router from "./Router/Router";
import {GlobalStyled, Container, Logo} from './styles';
import LogoLabex from './Assets/logo-labex.png';

function App() {
  return (
    <div> 
      <GlobalStyled/>
      <Container>
      <header>
        <Logo src={LogoLabex} alt='Logo Labex' />
      </header> 
      <Router/>
      </Container>
    </div>
  );
}

export default App;
