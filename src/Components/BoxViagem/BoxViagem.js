import { Viagem, Lista } from './styled'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getTripsUrl } from '../../Constants';

function BoxViagem() {
    const [ trips, setTrips ] = useState([])

    const getTrips = () => {
        axios.get(getTripsUrl)
            .then((sucess) => {
                setTrips(sucess.data.trips)
            })
            .catch((error) => {
                console.log('deu ruim', error.data.response.message)
            })
    }

    useEffect(() => {
        getTrips()
    },[])

    const listaViagem = trips.map((trip) => {
        return(
            <Viagem key={trip.id}>  
                <p><b>Nome:</b> {trip.name} </p>
                <p><b>Descrição:</b> {trip.description} </p>
                <p><b>Planeta:</b> {trip.planet} </p>
                <p><b>Duração:</b> {trip.durationInDays / 12 } </p>
                <p><b>Data:</b> {trip.date} </p>
            </Viagem>
        )
    })

    return (
        <div>
            <Lista>
                {listaViagem}
            </Lista>
        </div>
    );
  }
  
  export default BoxViagem;