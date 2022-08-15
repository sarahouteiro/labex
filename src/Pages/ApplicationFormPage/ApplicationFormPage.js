import { ButtonPrimario, Select, Input } from "../../styles";
import { Titulo, AreaForm, Botoes } from './styled';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { getTripsUrl } from '../../Constants';

function ApplicationFormPage() {
  const [ viagem, setViagem ] = useState()
  const [ nome, setNome ] = useState('')
  const [ idade, setIdade ] = useState('')
  const [ texto, setTexto ] = useState('')
  const [ profissao, setProfissao ] = useState('')
  const [ pais, setPais ] = useState()
  const [ viagens, setViagens ] = useState([])

  const onChangeViagem = (e) => {
    setViagem(e.target.value)
  }
  const onChangeNome = (e) => {
    setNome(e.target.value)
  }
  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }
  const onChangeTexto = (e) => {
    setTexto(e.target.value)
  }
  const onChangeProfissao = (e) => {
    setProfissao(e.target.value)
  }
  const onChangePais = (e) => {
    setPais(e.target.value)
  }

  const getViagens = () => {
    axios.get(getTripsUrl)
            .then((sucess) => {
                setViagens(sucess.data.trips)
            })
            .catch((error) => {
                console.log('deu ruim', error.data.response.message)
            })
  }

  const postApplication = (e) => {
    e.preventDefault();

    const body = {
      name: nome,
      age: Number(idade),
      applicationText: texto,
      profession: profissao,
      country: pais
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah/trips/${viagem}/apply`, body)
      .then((sucess) => {
        if(sucess.data.success) {
          alert('Inscrição enviada com sucesso');
          setViagem('')
          setNome('')
          setIdade('')
          setTexto('')
          setProfissao('')
          setPais('')
        }
      })
      .catch((error) => {
        console.log(error.data.response.message)
      })
  }

  useEffect(() => {
    getViagens()
  },[])

  const navigate = useNavigate();

  const goBack = () => {
        navigate(-1)
  }

  return (
    <div>
      <Titulo> Inscreva-se para uma viagem </Titulo>
      <AreaForm>
      <form onSubmit={postApplication}>
        <Select value={viagem} onChange={onChangeViagem} required>
          <option value=''>Escolha Uma Viagem</option>
          {viagens.map((viagem) => <option value={viagem.id} key={viagem.id}>{viagem.name}</option> )}
        </Select>
        <Input value={nome} onChange={onChangeNome} type='text' placeholder="Nome" required/>
        <Input value={idade} onChange={onChangeIdade} type='text' placeholder="Idade" required/>
        <Input value={texto} onChange={onChangeTexto} type='text' placeholder="Texto de Candidatura" required/>
        <Input value={profissao} onChange={onChangeProfissao} type='text' placeholder="Profissão" required/>
        <Select value={pais} onChange={onChangePais} required>
          <option value=''>Escolha um País</option>
          <option value='Brasil'>Brasil</option>
        </Select>
        <Botoes>
          <ButtonPrimario type="submit">Enviar</ButtonPrimario>
          <ButtonPrimario onClick={goBack}>Voltar</ButtonPrimario>
        </Botoes>
      </form>
      </AreaForm>
    </div>
  );
}
  
export default ApplicationFormPage;