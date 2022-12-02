import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/Home';
import { CadastroPage } from './pages/Cadastro';
import { ViagensPage } from './pages/Viagens';
import { SobrePage } from './pages/Sobre';

import './assets/css/normalize.css';
import './assets/css/global.css';

function App() {

  return (
    <div className="App">

      <Header />

      <main>

        <Routes>

          <Route path="/" element={ <HomePage />} />

          <Route path="/cadastro" element={ <CadastroPage />} />

          <Route path="/sobre" element={ <SobrePage />} />

          <Route path="/viagens" element={ <ViagensPage />} />

        </Routes>

      </main>

      <Footer />
      
    </div>

  )
}

export default App