import React from 'react';
import ArtistCard from './ArtistCard';

function ArtistList({ artistas }) {
  if (artistas.length === 0) {
    return <p className="msg-estado">No se encontraron raperos en esta categoría.</p>;
  }

  return (
    <div className="grid-artistas">
      {artistas.map((artista) => (
        <ArtistCard key={artista.id} artista={artista} />
      ))}
    </div>
  );
}

export default ArtistList;