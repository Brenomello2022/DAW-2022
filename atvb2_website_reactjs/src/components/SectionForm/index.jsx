import './style.css';

import imgAvatar from '../../assets/img/avatar.png';

export function SectionForm() {
    return (
        <section id='form'>

            <h2>Faça seu cadastro para ver as nossas promoções</h2>

            <form action="action_page.php" method="post">

                <div className="imgcontainer">
    
                    <img src={ imgAvatar } alt="Avatar" className="avatar" />
    
                </div>
              
                <div className="container">
    
                    <label><b>Seu E-mail</b></label>

                    <input type="text" placeholder="E-mail" name="uname" required />
              
                    <label><b>Sua Senha</b></label>
    
                    <input type="password" placeholder="Senha" name="psw" required />
              
                    <button type="submit">Entrar</button>
    
                </div>
              
                <div className="container">
    
                    <button type="button" className="cancelbtn">Cancelar</button>
    
                    <span className="psw"><a href="#">Esqueceu sua Senha ?</a></span>
    
                </div>
    
            </form>

        </section>
    )

}