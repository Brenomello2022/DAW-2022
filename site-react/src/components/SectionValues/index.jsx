import './style.css';

import imgLogo from '../../assets/img/place-company.png'

export function SectionValues() {
    return (
        <section id="values">

            <h2>Quem é a Imobiliária Unimater ?</h2>

            <div className="values-container">

                <img src={ imgLogo } alt="Foto da Firma" />

                <div className="values-content">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Commodi, quidem. Corrupti debitis repellat impedit perspiciatis incidunt. 
                    Optio ullam neque ipsum repudiandae temporibus cum! Facere, in vitae?
                    Sit, necessitatibus? Nihil, minima.</p>
            
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Incidunt iure eveniet deleniti veritatis cupiditate nesciunt illum! 
                    Velit numquam nemo accusamus recusandae vitae nulla dolorum, 
                    distinctio error dolore nisi, culpa iusto!</p>

                    <div className="value-detail">

                        <div className="value">

                            <span>Alto Padrão</span>

                            <span>Agilidade</span>

                        </div>

                        <div className="value">

                            <span>Facilidade</span>
                        
                            <span>Confiabilidade</span>
                        
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}