import React, { useState } from 'react';
import './EducaMais.css';

function EducaMais() {
  const [abaAtiva, setAbaAtiva] = useState('cursos');

  const materias = [
    { nome: "Matemática", icon: "📐" },
    { nome: "Português", icon: "✍️" },
    { nome: "Redação", icon: "📝" },
    { nome: "História", icon: "🏛️" },
    { nome: "Geografia", icon: "🌍" },
    { nome: "Filosofia", icon: "🧠" },
    { nome: "Sociologia", icon: "👥" },
    { nome: "Física", icon: "⚡" },
    { nome: "Química", icon: "🧪" },
    { nome: "Biologia", icon: "🧬" }
  ];

  const renderConteudo = () => {
    switch (abaAtiva) {
      case 'cursos':
        return (
          <div className="tab-panel">
            <h2>📚 Matérias</h2>
            <div className="materias-grid-dashboard">
              {materias.map((m, i) => (
                <div key={i} className="card-materia-unidade">
                  <span className="materia-icon">{m.icon}</span>
                  <h3>{m.nome}</h3>
                  <button className="btn-estudar">Acessar</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="tab-panel">
            <h2>🎬 Vídeo Aulas</h2>
            <div className="video-lista">
              {materias.map((m, i) => (
                <div key={i} className="video-item">
                  <div className="video-thumb">▶</div>
                  <div className="video-info">
                    <h4>{m.nome}: Introdução e Conceitos Base</h4>
                    <p>Duração: 45min • Professor EducaMais</p>
                  </div>
                  <button className="btn-play">Assistir</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'caderno':
        return (
          <div className="tab-panel">
            <h2>📓 Meu Caderno</h2>
            <textarea className="caderno-input" placeholder="Digite suas anotações da aula aqui..."></textarea>
          </div>
        );
      case 'simulados':
        return (
          <div className="tab-panel">
            <h2>📝 Simulados</h2>
            <div className="simulado-card">
              <h3>Simulado</h3>
              <p>90 Questões • Tempo: 05:30:00</p>
              <button className="btn-iniciar">Começar Agora</button>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar-branca">
        <div className="logo-dash">Educa<span>Mais</span></div>
        <nav className="nav-lateral">
          <button className={abaAtiva === 'cursos' ? 'active' : ''} onClick={() => setAbaAtiva('cursos')}>Cursos</button>
          <button className={abaAtiva === 'video' ? 'active' : ''} onClick={() => setAbaAtiva('video')}>Vídeo Aula</button>
          <button className={abaAtiva === 'caderno' ? 'active' : ''} onClick={() => setAbaAtiva('caderno')}>Caderno</button>
          <button className={abaAtiva === 'simulados' ? 'active' : ''} onClick={() => setAbaAtiva('simulados')}>Simulados</button>
        </nav>
        <button className="btn-sair-dash" onClick={() => window.location.href = '/'}>Sair</button>
      </aside>

      <main className="painel-principal">
        <header className="topo-dash">
          <span>Bem-vindo, <strong>Aluno!</strong></span>
        </header>
        <div className="area-interna">
          {renderConteudo()}
        </div>
      </main>
    </div>
  );
}

export default EducaMais;