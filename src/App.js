import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Navigate from './navigate/navigate';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
          <Navigate />
      </BrowserRouter>
    </div>
  );
}

export default App;
