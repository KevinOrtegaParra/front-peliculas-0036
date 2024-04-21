import React from "react";

export default function TrMedia({ media = [], borrarMedia, editarMedia }) {

    return (
        <div className="col" style={{ maxWidth: '250px', marginBottom: '20px' }}>
            <div className="card position-relative" style={{ maxWidth: '100%', height: 'auto' }} >
                <img src={media.ImagenPortada} className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }} />
                <div className="card-body" style={{ height: '80px' }}>
                    <h5 className="card-title">{media.Titulo} {media.AnioEstreno}</h5>
                </div>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editarMedia(media._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrarMedia(media._id)}>Borrar</button>
            </div>
        </div>
    )

}

//<p className="card-text" style={{ fontSize: '12px' }}>{media.Sinopsis}</p>

/*                <div className="overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
                    <div className="overlay-content text-light text-center">
                        <h5>{media.Titulo}</h5>
                        <p>Año de estreno: {media.AnioEstreno}</p>
                        {/* Agrega más información si es necesario *}
                        </div>
                        </div> */