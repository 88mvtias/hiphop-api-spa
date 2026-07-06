import React from 'react';

function Header({ usuario, setUsuario, tema, setTema }) {
  return (
    <header className="header-sitio">
      <div>
        <h1 className="titulo-api">
          📻 HipHopApi <span>90s</span>
        </h1>
        <p className="subtitulo">La era dorada del Rap en una sola página</p>
      </div>

      <div className="controles-header">
        <input
          type="text"
          placeholder="Tu Nombre de Rapero"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="input-usuario"
        />
        
        <button
          onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}
          className="btn-tema"
        >
          {tema === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
    </header>
  );
}

export default Header;