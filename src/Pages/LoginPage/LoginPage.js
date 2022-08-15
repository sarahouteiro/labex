import { Titulo, Botoes } from './styled';
import { Input, ButtonPrimario } from '../../styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loginUrl } from '../../Constants';
import axios from 'axios';

function LoginPage() {
  const token = localStorage.getItem('token');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangeSenha = (e) => {
    setSenha(e.target.value)
  }

  const navigate = useNavigate();

  useEffect(() => {
    if(token !== null) {
      navigate('/admin/home')
    }
  }, [token, navigate])

  const goToAdminHomePage = () => {
    const body = {
      email: email,
      password: senha
    };
    axios.post(loginUrl, body)
      .then((success) => {
        if(success.data.token) {
          localStorage.setItem('token', success.data.token);
          navigate('/admin/home');
        }
      })
      .catch((error) => {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      })
  }

  const goBack = () => {
      navigate(-1)
  }

  return (
    <div>  
      <Titulo>Login</Titulo>
      <Input value={email} onChange={onChangeEmail} type='email' placeholder='E-mail' required/>
      <Input value={senha} onChange={onChangeSenha} type='password' placeholder='Senha' required/>
      <ButtonPrimario onClick={goToAdminHomePage}>Entrar</ButtonPrimario>
      <Botoes>
        <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
      </Botoes>
    </div>
  );
}
  
export default LoginPage;
  