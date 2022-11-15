
import './App.css';
import Socialhome from './socialhome.js';
import Contact from './contact.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Socialhome />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
