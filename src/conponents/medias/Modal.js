import React from "react"

export default function Modal({ media, handleChange, guardar, generos, directores, productoras, tipos, handleClose }) {
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Agregar Serie o Pelicula</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Series y Peliculas</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={guardar}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Serial:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="Serial" value={media.Serial} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Titulo:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="Titulo" value={media.Titulo} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Url Pelicula:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="UrlPelicula" value={media.UrlPelicula} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Url Imagen Portada:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="ImagenPortada" value={media.ImagenPortada} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Añio de Estreno:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="AnioEstreno" value={media.AnioEstreno} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Sinopsis:</label>
                                    <textarea className="form-control" id="message-text" name="Sinopsis" value={media.Sinopsis} onChange={handleChange}></textarea>
                                </div>
                                <select className="form-select" aria-label="Default select example" name="GeneroPrincipal" onChange={handleChange}>
                                    <option value={generos}>Genero Principal</option>
                                    {
                                        generos.map((genero) => {
                                            return (
                                                <option key={genero._id} value={genero._id} >{genero.nombre}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="form-select" aria-label="Default select example" name="DirectorPrincipal" onChange={handleChange}>
                                    <option value={directores}>ODirector Principal:</option>
                                    {
                                        directores.map((director) => {
                                            return (
                                                <option key={director._id} value={director._id} >{director.Nombre}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="form-select" aria-label="Default select example" name="Productora" onChange={handleChange}>
                                    <option value={productoras}>Productora</option>
                                    {
                                        productoras.map((productora) => {
                                            return (
                                                <option key={productora._id} value={productora._id} >{productora.Nombre}</option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="form-select" aria-label="Default select example" name="Tipo" onChange={handleChange}>
                                    <option value={tipos}>Tipo</option>
                                    {
                                        tipos.map((tipo) => {
                                            return (
                                                <option key={tipo._id} value={tipo._id} >{tipo.Nombre}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cerrar</button>
                                    <button type="submit" className="btn btn-primary" disabled={media.Serial.length == 0}>Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}