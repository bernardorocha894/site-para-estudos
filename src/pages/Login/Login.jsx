import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [isRegistro, setIsRegistro] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          Educa<span>Mais</span>
        </div>

        <h2>{isRegistro ? "Crie sua conta" : "Entrar"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegistro && (
            <input type="text" placeholder="Nome completo" required />
          )}
          <input type="email" placeholder="Seu e-mail" required />
          <input type="password" placeholder="Sua senha" required />
          
          <button type="submit" className="btn-entrar">
            {isRegistro ? "Cadastrar" : "Entrar"}
          </button>
        </form>

        <div className="footer">
          <p>
            {isRegistro ? "Já tem conta?" : "Não tem conta?"}{" "}
            <span onClick={() => setIsRegistro(!isRegistro)}>
              {isRegistro ? "Faça login" : "Cadastre-se"}
            </span>
          </p>
          <button className="btn-voltar" onClick={() => navigate("/")}>
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;