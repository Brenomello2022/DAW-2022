import './style.css';

import imgFundo from '../../assets/img/fundo.png';

export function Footer() {
    return (
        <footer>

            <div className="container">

                <div className="footer-content">

                    <div className="footer-row">

                        <div className="footer-column">

                            <div className="footer-flip-card">

                                <div className="footer-flip-card-inner">
        
                                    <div className="footer-flip-card-front">
        
                                        <img src={ imgFundo } alt="Praia" />
        
                                    </div>
        
                                    <div className="footer-flip-card-back">
        
                                        <h1>Tenha uma boa viagem!</h1>

                                        <h1>:D</h1>
        
                                    </div>
        
                                </div>
        
                            </div>

                        </div>

                        <div className="footer-menu">

                            <div className="footer-menu">

                                <p>Nós da Viagens United, assim como você, adoramos aventuras</p>
    
                                <p>Temos a intenção que você tenha a viagem dos seus sonhos</p>
        
                            </div>
    
                        </div>

                    </div>

                    <div className="footer-social">

                        <i className="fa fa-facebook" aria-hidden="true"></i>

                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    
                        <i className="fa fa-instagram" aria-hidden="true"></i>
    
                    </div>
    
                    <p className="footer-copright">
    
                        &#169; 2022 - Todos os direitos reservados 
    
                    </p>
    
                </div>

            </div>
        
        </footer>
    )
}