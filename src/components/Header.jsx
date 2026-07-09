import React from 'react';

function Header({ busqueda, setBusqueda, usuario, setUsuario, tema, setTema }) {

  const manejarGuardarUsuario = (e) => {
    e.preventDefault();
    if (usuario.trim()) {
      alert(`¡Alias "${usuario}" guardado con éxito en localStorage!`);
    }
  };

  return (
    <header className="header-sitio">
      <div>
        <h1 className="titulo-api">
           HipHop<span>API</span>
        </h1>
        <p className="subtitulo">La era dorada del Rap en una sola página</p>
        
        {usuario && (
          <p className="saludo-usuario">
             Bienvenido al juego, <strong>{usuario}</strong>
          </p>
        )}
      </div>

      <div className="controles-header">
        <input
          type="text"
          placeholder="Buscar rapero..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-usuario input-busqueda"
        />

        <form onSubmit={manejarGuardarUsuario} className="form-usuario">
          <input
            type="text"
            placeholder="Tu Alias / Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="input-usuario"
          />
          <button type="submit" className="btn-guardar" title="Guardar en localStorage">
            Guardar
          </button>
        </form>

        <button
          onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}
          className="btn-tema"
        >
          {tema === 'dark' ? 'Claro' : 'Oscuro'}
        </button>
      </div>
    </header>
  );
}

export default Header;