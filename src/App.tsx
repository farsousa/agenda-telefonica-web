import { RecoilRoot } from 'recoil'
import './App.css'
import AppRoutes from './routes';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <AppRoutes />
      </div>
    </RecoilRoot>
  );
}

export default App;
