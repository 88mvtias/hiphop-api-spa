import React, { useState, useEffect, useMemo } from 'react';
import ArtistList from './components/ArtistList';
import Header from './components/Header';
import { setCookie, getCookie } from './hooks/useCookies';

function App() {
  const [artistas, setArtistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  
  const [usuario, setUsuario] = useState(() => {
    return localStorage.getItem('hiphop_username') || '';
  });
  const [tema, setTema] = useState(() => {
    return getCookie('hiphop_theme') || 'dark';
  });

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/raperos.json');
        if (!response.ok) throw new Error('Error al conectar con la API');
        const data = await response.json();
        setArtistas(data);
      } catch (error) {
        console.error("Error cargando los datos de la API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtistas();
  }, []);

  useEffect(() => {
    localStorage.setItem('hiphop_username', usuario);
  }, [usuario]);

  useEffect(() => {
    setCookie('hiphop_theme', tema, 7);
    document.body.className = tema; 
  }, [tema]);

  const artistesFiltrados = useMemo(() => {
    if (filtroTipo === 'Todos') return artistas;
    return artistas.filter(artista => artista.tipo === filtroTipo);
  }, [artistas, filtroTipo]);

  return (
    <div className="app-container">
      <div className="max-width-content">
        <Header 
          usuario={usuario} 
          setUsuario={setUsuario} 
          tema={tema} 
          setTema={setTema} 
        />

        <main>
          <div className="contenedor-filtros">
            {['Todos', 'Solista', 'Grupo'].map((tipo) => (
              <button
                key={tipo}
                onClick={() => setFiltroTipo(tipo)}
                className={`btn-filtro ${filtroTipo === tipo ? 'activo' : ''}`}
              >
                {tipo}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="msg-estado">Cargando los clásicos del Hip-Hop...</p>
          ) : (
            <ArtistList artistas={artistesFiltrados} />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;