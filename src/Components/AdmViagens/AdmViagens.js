import { Box, Remove } from './styled';
import Trash from '../../Assets/trash-icon.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getTripsUrl } from '../../Constants';

function AdmViagens() {
  const token = localStorage.getItem('token');
  const [ viagens, setViagens ] = useState([]);

  const navigate = useNavigate();

  const goToDetailsPage = (id) => {
      navigate(`/detalhes/${id}`)
  }

  const deteleTrip = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah/trips/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((success) => {
      console.log('Viagem deletado com sucesso', success.data);
      alert('Viagem deletada com sucesso!');
      getTrips();
    })
    .catch((error) => {
      console.log(error.response.data.message)
    })
  }

  const getTrips = () => {
    axios.get(getTripsUrl)
      .then((sucess) => {
        setViagens(sucess.data.trips)
      })
      .catch((error) => {
          console.log('deu ruim', error.data.response.message)
      })
  }

  useEffect(() => {
    getTrips();
  }, [])

  return(
    <div>
      {viagens.map((viagem) => {
        return(
          <Box key={viagem.id}>
            <p onClick={() => goToDetailsPage(viagem.id)}>{viagem.name}</p>
            <Remove onClick={() => deteleTrip(viagem.id)} src={Trash} alt='Remover'/>
          </Box>
        )
      })}
    </div>
  );
}
  
export default AdmViagens;