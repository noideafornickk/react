import RotasApp from './routes';
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <ToastContainer autoClose={4000} />
     <RotasApp />
    </div>
  );
}

export default App;