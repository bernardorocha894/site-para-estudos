import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explorar.css';

function Explorar() {
  const navigate = useNavigate();

  const materias = [
    "Matemática", "Português", "Redação", "História", "Geografia", 
    "Filosofia", "Sociologia", "Física", "Química", "Biologia"
  ];

  return (
    <div className="explorar-container">
      <nav className="explorar-nav">
        <div className="brand-logo" onClick={() => navigate('/')}>Educa<span>Mais</span></div>
        <button onClick={() => navigate('/login')} className="btn-acesso">Criar Conta Grátis</button>
      </nav>

      <header className="explorar-header">
        <span className="tag-doc">Tour da Plataforma</span>
        <h1>O que você encontra no <span>EducaMais</span>?</h1>
        <p>Uma experiência completa para transformar sua rotina de estudos.</p>
      </header>

      {/* 1º: MATÉRIAS */}
      <section className="materias-section">
        <h2>Matérias</h2>
        <p className="sub">Base completa de conteúdos organizados para você:</p>
        <div className="materias-grid">
          {materias.map((materia, i) => (
            <div key={i} className="materia-tag">{materia}</div>
          ))}
        </div>
      </section>

      {/* 2º: FERRAMENTAS (VÍDEO, CADERNO, SIMULADOS) */}
      <section className="features-tour">
        <div className="feature-card">
          <div className="feature-icon">🎬</div>
          <div className="feature-info">
            <h3>Vídeo Aulas</h3>
            <p>Explicações claras e diretas ao ponto com os melhores professores.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📓</div>
          <div className="feature-info">
            <h3>Caderno de Anotações</h3>
            <p>Escreva seus conteúdos enquanto assiste e nunca mais perca uma ideia.</p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <div className="feature-info">
            <h3>Simulados</h3>
            <p>Teste seus conhecimentos com questões reais e acompanhe sua evolução.</p>
          </div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="cta-tour">
        <div className="cta-inner">
          <h2>Tudo isso em um só lugar.</h2>
          <p>Venha conhecer a plataforma gratuitamente.</p>
          <button onClick={() => navigate('/login')} className="btn-final-tour">
            Começar Agora
          </button>
        </div>
      </section>
    </div>
  );
}

export default Explorar;