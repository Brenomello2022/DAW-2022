import './style.css';

export function SectionCards() {

    return (
        <section id="cards">

            <h2>Imóveis disponiveis</h2>

            <div className="cards-content">

            {imoveis.map((item, index) => (

                    <div key={index} className="card">

                        <img src={item.foto} alt="Casa 1" />

                        <div className="card-content">

                            <h4>{ item.titulo }</h4>
                            
                            <p>{ item.descricao }</p>

                            <div className="card-price">

                                <p>

                                    <IntlProvider locale="pt-BR">

                                        <FormattedNumber value={item.preco} 

                                            style="currency"

                                            currency="BRL" />

                                    </IntlProvider>

                                </p>

                            </div>

                        </div>

                    </div>
                    
                ))}

            </div>

        </section>
    )
}