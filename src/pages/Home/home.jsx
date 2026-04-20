import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [slideAtivo, setSlideAtivo] = useState(0);

  const slides = [
    {
      titulo: "Para Estudantes",
      itens: ["Simulados Completos", "Matérias Organizadas", "Vídeo Aulas Exclusivas"],
      cor: "#00aaff"
    },
    {
      titulo: "Para Professores",
      itens: ["Gestão de Conteúdo", "Controle de Turmas", "Upload de Aulas"],
      cor: "#0077cc"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAtivo((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page-container">
      <nav className="header-nav">
        <div className="brand-logo">Educa<span>Mais</span></div>
        <div className="auth-btns">
          <button onClick={() => navigate('/login')} className="link-btn">Entrar</button>
          <button onClick={() => navigate('/explorar')} className="cta-small">Explorar</button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <span className="mini-label">Projeto Social</span>
          <h1>A forma de estudar <span>mais fácil</span> da web.</h1>
          <p>Desenvolvemos o EducaMais para promover a igualdade social nos estudos.</p>
          <button onClick={() => navigate('/explorar')} className="cta-green">
            Conhecer a plataforma →
          </button>
        </div>

        <div className="hero-banner">
          <div className="promo-card">
            <div className="card-tag" style={{ backgroundColor: slides[slideAtivo].cor }}>Destaque</div>
            
            <div key={slideAtivo} className="card-content-animator">
              <h2>{slides[slideAtivo].titulo}</h2>
              <ul className="check-list">
                {slides[slideAtivo].itens.map((item, i) => (
                  <li key={i}><span>✔</span> {item}</li>
                ))}
              </ul>
            </div>

            <div className="slide-indicators">
              <span 
                className={slideAtivo === 0 ? 'dot active' : 'dot'} 
                onClick={() => setSlideAtivo(0)}
              ></span>
              <span 
                className={slideAtivo === 1 ? 'dot active' : 'dot'} 
                onClick={() => setSlideAtivo(1)}
              ></span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;