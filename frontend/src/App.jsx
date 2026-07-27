import './App.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RegistroIncidente from './components/RegistroIncidente';
import ListaTickets from './components/ListaTickets';

function App() {

    return (

        <>

            <Navbar />

            <main>

                <Dashboard />

                <RegistroIncidente />

                <ListaTickets />

            </main>

        </>

    );

}

export default App;