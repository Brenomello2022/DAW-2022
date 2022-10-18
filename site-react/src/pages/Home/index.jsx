import './style.css';

export function HomePage() {
    return (
        <div id='homepage'>

            <div class="container">

                <section id="banner">

                    <div class="banner-content">

                        <h1>Lugar exato para voce realizar os seus sonhos</h1>

                        <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>

                    </div>

                    <div class="banner-filter">

                        <div class="filter-fields">

                            <form>

                                <select>

                                    <option value="venda">Venda</option>

                                    <option value="locacao">Locação</option>

                                </select>

                                <select>

                                    <option>Tipo Imóvel</option>

                                    <option value="apto">Apartamento</option>

                                    <option value="casa">Casa</option>

                                    <option value="sobrado">Sobrado</option>

                                    <option value="terreno">Terreno</option>

                                </select>

                                <select>

                                    <option>Cidade</option>

                                    <option value="coronel">Coronel Vivida</option>

                                    <option value="francisco">Francisco Beltrão</option>

                                    <option value="pato">Pato Branco</option>

                                    <option value="saudade">Saudade do Iguaçu</option>

                                </select>

                                <select>

                                    <option>Bairro</option>

                                    <option value="brasilia">Brasilia</option>

                                    <option value="centro">Centro</option>

                                    <option value="lasalle">La Salle</option>

                                    <option value="pinheiros">Pinheiros</option>

                                </select>

                            </form>

                        </div>

                        <div class="filter-result">

                            <p class="result-value">26</p>

                            <p class="result-label">Imóveis</p>

                            <button>Filtrar</button>

                        </div>

                    </div>

                </section>

                <section id="cards">

                    <h2>Imóveis disponiveis</h2>

                    <div class="cards-content">

                        <div class="card">

                            <img src="./assets/img/thumb1.png" alt="Casa 1" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                        <div class="card">

                            <img src="./assets/img/thumb2.png" alt="Casa 2" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                        <div class="card">

                            <img src="./assets/img/thumb3.png" alt="Casa 3" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                        <div class="card">

                            <img src="./assets/img/thumb4.png" alt="Casa 4" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                        <div class="card">

                            <img src="./assets/img/thumb5.png" alt="Casa 5" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                        <div class="card">

                            <img src="./assets/img/thumb6.png" alt="Casa 6" />

                            <div class="card-content">

                                <h4>Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.</h4>

                                <p>Perferendis enim animi molestias vero quas
                                vel sed incidunt quisquam labore expedita?
                                Modi a harum deleniti cumque quisquam ipsa est facilis autem!
                                </p>

                                <div class="card-price">

                                    <p>R$ 900.000,00</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section id="reason">

                    <h2>Por que nos escolher?</h2>

                    <div class="reasons-content">

                        <div class="reason">

                            <p class="reason-value">+1000</p>

                            <p class="reason-label">Imóveis</p>

                        </div>

                        <div class="reason">

                            <p class="reason-value">+500</p>

                            <p class="reason-label">Clientes Felizes</p>

                        </div>

                        <div class="reason">

                            <p class="reason-value">+50</p>

                            <p class="reason-label">Premiações</p>

                        </div>

                        <div class="reason">

                            <p class="reason-value">+100</p>

                            <p class="reason-label">Especialistas</p>

                        </div>

                    </div>

                </section>

                <section id="specialists">

                    <h2>Converse com um Especialista</h2>

                    <div class="specialists-content">

                        <div class="specialist">

                            <h5>Tutu Williams</h5>

                            <p>London</p>

                            <p class="specialists-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis alias officiis harum accusantium, reiciendis voluptate,
                            quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi,
                            necessitatibus ducimus iure.</p>

                        </div>

                        <div class="specialist">

                            <h5>Mark Zion</h5>

                            <p>New York City</p>

                            <p class="specialists-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis alias officiis harum accusantium, reiciendis voluptate,
                            quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi,
                            necessitatibus ducimus iure.</p>

                        </div>

                        <div class="specialist">

                            <h5>Essien Crest</h5>

                            <p>Berlin</p>

                            <p class="specialists-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis alias officiis harum accusantium, reiciendis voluptate,
                            quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi,
                            necessitatibus ducimus iure.</p>

                        </div>

                    </div>

                </section>

                <section id="values">

                    <h2>Quem é a Imobiliária Unimater ?</h2>

                    <div class="values-container">

                        <img src="./assets/img/place-company.png" alt="Foto da Firma" />

                        <div class="values-content">

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Commodi, quidem. Corrupti debitis repellat impedit perspiciatis incidunt. 
                            Optio ullam neque ipsum repudiandae temporibus cum! Facere, in vitae?
                            Sit, necessitatibus? Nihil, minima.</p>
            
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Incidunt iure eveniet deleniti veritatis cupiditate nesciunt illum! 
                            Velit numquam nemo accusamus recusandae vitae nulla dolorum, 
                            distinctio error dolore nisi, culpa iusto!</p>

                            <div class="value-detail">

                                <div class="value">

                                    <span>Alto Padrão</span>

                                    <span>Agilidade</span>

                                </div>

                                <div class="value">

                                    <span>Facilidade</span>
                        
                                    <span>Confiabilidade</span>
                        
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        
        </div>
    )
}