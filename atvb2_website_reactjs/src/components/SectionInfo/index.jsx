import './style.css';

export function SectionInfo() {
    return(
        <section id="info">

            <h2>Informações</h2>

            <div className="container">

                <div className="row-info">

                    <div className="column-info">

                        <div className="card-inform">

                            <p className="main-menu-title">Contato e Localização</p>

                            <ul>

                                <li>+55 (46) 9 9999 9999</li>

                                <li>Rua Avenida Brasil, 320</li>

                                <li>Pato Branco, PR</li>

                            </ul>

                        </div>

                    </div>

                    <div className="column-info">

                        <div className="card-inform">

                            <p className="main-menu-title">Parcerias</p>

                            <ul>
    
                                <li>Agencia SA</li>
    
                                <li>Brasil Turismo</li>
    
                                <li>Vactions Paradise</li>
    
                            </ul>
    
                        </div>
    
                    </div>

                    <div className="column-info">

                        <div className="card-inform">

                            <p className="main-menu-title">Garantias</p>

                            <ul>

                                <li>Segurança</li>

                                <li>Diversão</li>

                                <li>Qualidade</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}