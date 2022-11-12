import './style.css';

const especialistas = [
    {
        nome: 'Tutu Williams',
        cidade: 'London',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias officiis harum accusantium, reiciendis voluptate, quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi, necessitatibus ducimus iure.',
    },
    {
        nome: 'Mark Zion',
        cidade: 'New York City',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias officiis harum accusantium, reiciendis voluptate, quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi, necessitatibus ducimus iure.',
    },  
    {
        nome: 'Essien Crest',
        cidade: 'Berlin',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias officiis harum accusantium, reiciendis voluptate, quod cupiditate provident vero consequatur aut nulla veniam id atque et quasi, necessitatibus ducimus iure.',
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">

            <h2>Converse com um Especialista</h2>

            <div className="specialists-content">

                { especialistas.map((item, index) => (
                    <div key={ index } className="specialist">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="specialist-detail">{ item.descrição }</p>
                    </div>    
                ))}

            </div>

        </section>
    )
}