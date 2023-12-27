import { RecoilRoot } from 'recoil'
import './App.css'
import ListarContato from './pages/ListarContato'
import CadastrarContato from './pages/CadastrarContato';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <CadastrarContato />
        <ListarContato />
      </div>
    </RecoilRoot>
  );
}

export default App;
