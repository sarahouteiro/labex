import { Titulo, Botoes, AreaForm } from './styled';
import { ButtonPrimario, Select, Input} from '../../styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CreateTripPage() {
  const token = localStorage.getItem('token');

  const [ nome, setNome ] = useState('');
  const [ planeta, setPlaneta ] = useState('');
  const [ data, setData ] = useState('');
  const [ descricao, setDescricao ] = useState('');
  const [ duracaoDias, setDuracaoDias ] = useState('');

  const onChangeNome = (e) => {
    setNome(e.target.value)
  }

  const onChangePlaneta = (e) => {
    setPlaneta(e.target.value)
  }

  const onChangeData = (e) => {
    setData(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const onChangeDuracaoDias = (e) => {
    setDuracaoDias(e.target.value)
  }

  const criarViagem = (e) => {
    e.preventDefault();

    const date = new Date(data)

    const body = {
      name: nome,
      planet: planeta,
      date: `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`,
      description: descricao,
      durationInDays: Number(duracaoDias)
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah/trips', body, {
      headers: {
        auth: token
      }
    })
    .then((success) => {
      console.log(success, 'Viagem criada com sucesso')
      alert('Viagem criada com sucesso');
      setNome('')
      setPlaneta('')
      setData('')
      setDescricao('')
      setDuracaoDias('')
    })
    .catch((error) => {
      console.log(error.response.data.message)
    })
  }

  const navigate = useNavigate();

  const goBack = () => {
      navigate(-1)
  }

  useEffect(() => {
    if(token === null) {
      navigate('/login')
    }
  },[navigate, token])

  return (
    <div>  
        <Titulo> Inscreva-se para uma viagem </Titulo>
        <AreaForm>
          <form onSubmit={criarViagem}>
            <Input value={nome} onChange={onChangeNome} placeholder="Nome" required/>
            <Select value={planeta} onChange={onChangePlaneta} required>
              <option value=''>Escolha um Planeta</option>
              <option value='mercurio'>Mercúrio</option>
              <option value='venus'>Vênus</option>
              <option value='terra'>Terra</option>
              <option value='marte'>Marte</option>
              <option value='jupiter'>Júpiter</option>
            </Select>
            <Input type='date' value={data} onChange={onChangeData} required/>
            <Input value={descricao} onChange={onChangeDescricao} placeholder="Descrição" required/>
            <Input value={duracaoDias} onChange={onChangeDuracaoDias} placeholder="Duração em Dias" required/>
            <Botoes>
              <ButtonPrimario type='submit'>Criar</ButtonPrimario>
              <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
            </Botoes>
          </form>
        </AreaForm>
    </div>
  );
}
  
export default CreateTripPage;
  