import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Wedding from './Components/Pages/Wedding/Wedding';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Wedding" element={<Wedding/>} />

      </Routes>
    <Footer/>

    </BrowserRouter>
    </>
  );
}

export default App;
