import HomePage from '../Pages/HomePage/HomePage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage';
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage';
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage';
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='lista-de-viagens' element={<ListTripsPage/>}/>
                <Route path='criar-viagem' element={<CreateTripPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='admin/home' element={<AdminHomePage/>}/>
                <Route path='inscricao' element={<ApplicationFormPage/>}/>
                <Route path='detalhes/:id' element={<TripDetailsPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default Router;