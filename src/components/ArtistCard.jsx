import React from 'react';

function ArtistCard({ artista }) {
  return (
    <div className="carta-rapero">
      {artista.imagen && (
        <img src={artista.imagen} alt={artista.nombre} className="imagen-rapero" />
      )}
      <div className="carta-contenido-texto">
        <div className="carta-header">
          <h3 className="nombre-rapero">{artista.nombre}</h3>
          <span className="tag-tipo">{artista.tipo}</span>
        </div>
        <p className="carta-info"><strong>Origen:</strong> {artista.origen}</p>
        <p className="carta-info"><strong>Álbum Clave:</strong> {artista.album_destacado}</p>
        <p className="carta-descripcion">{artista.descripcion}</p>
      </div>
    </div>
  );
}

export default ArtistCard;