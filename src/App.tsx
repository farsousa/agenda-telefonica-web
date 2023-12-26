import { RecoilRoot } from 'recoil';
import './App.css';
import ListarContato from './pages/ListarContato';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ListarContato />
      </div>
    </RecoilRoot>
  );
}

export default App;
