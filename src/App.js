import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Principal/home';
import Recetas from './pages/recetas/recetas'
import Contacto from './pages/contacto/contacto'
import NotFountPage from './pages/notFountPage/notFountPage'
import Nav from './component/nav/nav';
import Footer from './component/footer/footer'


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recetas" element={<Recetas/>} />
        <Route path="/contactos" element={<Contacto/>} />
        <Route path="*" element={<NotFountPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
