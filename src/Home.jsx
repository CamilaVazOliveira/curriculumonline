import './App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page-container">
      {/* NAVBAR */}
      <nav className="navbar-custom">

        <div className="nav-left">

          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="nav-right">
          <button className="notification-btn">
            🔔 Notificações
            <span className="badge">99+</span>
          </button>
        </div>

      </nav>

      <main className="main-content">

        <section className='secao1'>

          {/* ÁREA DOS BOTÕES */}


          {/* DROPDOWN */}
          <div className="dropdown">

            <button
              className="btn dropdown-toggle dropdown-button"
              data-bs-toggle="dropdown"
            >
              Menu Dropdown
            </button>

            <ul className="dropdown-menu">

              <li>
                <a className="dropdown-item" href="#">
                  Portfólio
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Fale Conosco
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Fechar
                </a>
              </li>

            </ul>

          </div>

          {/* SOBRE MIM */}
          <button
            className="about-btn"
            data-bs-toggle="collapse"
            data-bs-target="#sobreMim"
          >
            Sobre Mim
          </button>

        </section>

        {/* PERFIL */}

        <section className='secao2'>
          <button
            className="botao-perfil"
            data-bs-toggle="modal"
            data-bs-target="#meuModal"
          >
            Ver Perfil
          </button>


        </section>



        {/* COLLAPSE */}
        < div className="collapse-area" >

          <div className="collapse" id="sobreMim">

            <div className="card card-body">
              Sou uma pessoa curiosa e determinada,
              sempre buscando aprender e evoluir.
            </div>

          </div>

        </div >

        {/* MODAL */}
        < div className="modal fade" id="meuModal" >

          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-body">

                <img
                  src="/usuario.jpg"
                  alt="Perfil"
                  className="imagem-perfil"
                />

                <p>
                  Camila Cristina Cardoso Vaz<br />
                  Curso Técnico de Análise e desenvolvimento de Sistemas<br />
                  Botucatu - SP
                </p>

              </div>

            </div>

          </div>

        </div >

        {/* ACCORDION */}
        < div className="accordion-container" >

          <div className="accordion">

            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#exp"
                >
                  Experiência Profissional
                </button>
              </h2>

              <div id="exp" className="accordion-collapse collapse">
                <div className="accordion-body">
                  2011 - 2020 - Consciência Soluções e Tecnologia
                  Analista Comercial
                  Atribuições: Prospecção e Vendas
                  <br></br>
                  2020 - 2026 - Olenka Cosméticos
                  Adm/Vendas
                  Atribuições: Atendimento ao Público
                  Promoção de Eventos
                  Vendas

                </div>
              </div>

            </div>

            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#hab"
                >
                  Habilidades
                </button>
              </h2>

              <div id="hab" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Atendimento ao Público
                  <br></br>
                  Comunicação clara e Persuasão
                  <br></br>
                  Escuta ativa
                  <br></br>
                  Gestão de tempo e Planejamento
                  <br></br>
                  HTML, CSS, JavaScript e React.
                </div>
              </div>

            </div>

            <div className="accordion-item">

              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#form"
                >
                  Formação
                </button>
              </h2>

              <div id="form" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Ensino Médio Completo
                  <br></br>
                  Curso Técnico de Análise e Desenvolvimento de Sistemas
                </div>
              </div>

            </div>

          </div>

        </div >

        {/* FOOTER */}
      </main>

      <footer className="footer-custom">

        <div className="footer-container">

          <button className="footer-btn">
            Informações para Contato
          </button>

          <div className="social-icons">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

          </div>

          <p className="footer-copy">
            © 2026 - Camila Cristina Cardoso Vaz
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home