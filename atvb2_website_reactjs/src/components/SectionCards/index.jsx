import { IntlProvider, FormattedNumber } from 'react-intl';

import './style.css';

const viagens = [
    {
        foto: './assets/img/Praia-Brasil-Nordeste.png',
        titulo: 'Brasil, Nordeste',
        preco: 11000.00,
    },
    {
        foto: './assets/img/Praia-Maldivas.png',
        titulo: 'Maldivas',
        preco: 12280.00,
    },
    {
        foto: './assets/img/Praia-Caribe.png',
        titulo: 'Caribe',
        preco: 15000.00,
    },
    {
        foto: './assets/img/Praia-Sri-Lanka.png',
        titulo: 'Sri Lanka',
        preco: 11000.00,
    },
    {
        foto: './assets/img/Praia-Tailandia-Khao-Lak.png',
        titulo: 'Tailandia, Khao Lak',
        preco: 16200.00,
    },
    {
        foto: './assets/img/Praia-Tailandia-Koh-Lanta.png',
        titulo: 'Tailandia, Koh Lanta',
        preco: 18000.00,
    },
]

export function SectionCards() {
    return (
        <section id="cards">

            <h2>Viagens disponiveis</h2>

            <div className="row">

                {viagens.map((item, index) => (
                    <div key={index} className="column">


                        <div className="card">
                            <div className="cards-content">

                                <img src={item.foto} alt={item.titulo} />

                                <h1>{item.titulo}</h1>

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

                    </div>
                ))}

            </div>

        </section>
    )
}