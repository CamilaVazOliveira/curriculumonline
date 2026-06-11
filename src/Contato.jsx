import { Link } from 'react-router-dom'
import './App.css'

function Contato() {
  return (
    <>
      <nav className="navbar-custom">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/contato" className="active">
            Contato
          </Link>
        </div>
      </nav>

      <div className="contato-container">

        <h1 className="titulo-formulario">
          Formulário de Feedback
        </h1>

        <form className="formulario-feedback">

          <div className="linha-inputs">

            <input
              type="text"
              placeholder="Primeiro Nome"
            />

            <input
              type="text"
              placeholder="Último Nome"
            />

          </div>

          <input
            type="email"
            placeholder="Email"
          />

          <label>
            Diga pontos deste perfil interessantes:
          </label>

          <textarea rows="4"></textarea>

          <label>
            Cor favorita?
          </label>

          <input
            type="color"
            className="cor-input"
          />

          <label>
            Qual habilidade mais te interessa?
          </label>

          <select>

            <option>Escolha...</option>

            <option>HTML</option>

            <option>CSS</option>

            <option>JavaScript</option>

            <option>React</option>

          </select>

          <label>
            Qual seu gosto musical?
          </label>

          <div className="checkbox-group">

            <label>
              <input type="checkbox" />
              Rock
            </label>

            <label>
              <input type="checkbox" />
              Pop
            </label>

            <label>
              <input type="checkbox" />
              Sertanejo
            </label>

            <label>
              <input type="checkbox" />
              Eletrônica
            </label>

            <label>
              <input type="checkbox" />
              Outra
            </label>

          </div>

          <label>
            Qual nota daria para este perfil?
          </label>

          <div className="radio-group">

            {[1,2,3,4,5,6,7,8,9,10].map((nota) => (
              <label key={nota}>
                <input
                  type="radio"
                  name="nota"
                />
                {nota}
              </label>
            ))}

          </div>

          <label>
            Adicione um comentário:
          </label>

          <textarea rows="5"></textarea>

          <button
            type="submit"
            className="btn-enviar"
          >
            Enviar Feedback
          </button>

        </form>

      </div>
    </>
  )
}

export default Contato