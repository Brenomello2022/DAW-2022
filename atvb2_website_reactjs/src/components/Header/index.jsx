import { useLocation } from 'react-router-dom';
import './style.css';

import imgLogo from '../../assets/img/airplane.png';

export function Header() {

    const location = useLocation();

    return (
        <header>

            <div className="container">

                <div className="brand">

                    <img src={ imgLogo } alt="Logomarca" />

                    <h6>Viagens United</h6>

                </div>

                <nav>

                    <div className="header-navbar">

                        <a href="/" className={location.pathname == '/' ? 'active' : ''}>
                            <i className="fa fa-fw fa-home" aria-hidden="true"></i>
                            Home
                        </a>

                        <a href="/viagens" className={location.pathname == '/viagens' ? 'active' : ''}>
                            <i className="fa fa-fw fa-map-marker" aria-hidden="true"></i>
                            Mais Viagens
                        </a>

                        <a href="/sobre" className={location.pathname == '/sobre' ? 'active' : ''}>
                            <i className="fa fa-fw fa-history" aria-hidden="true"></i>
                            Sobre Nós
                        </a>

                        <a href="/Cadastro" className={location.pathname == '/cadastro' ? 'active' : ''}>
                            <i className="fa fa-fw fa-user" aria-hidden="true"></i>
                            Cadastro
                        </a>

                    </div>
                
                </nav>

            </div>

        </header>
    )
}