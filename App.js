import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Home from './components/Home';
import Shop from './components/Shop';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Main/>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/Shop' element={<Shop/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
