import React from "react"
import TrGenero from "./TrGenero"

export default function Table({generos = [], borrarGenero, editarGenero}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                {
                    generos.map((genero, index) => {
                        return (
                            <TrGenero genero={genero} index={index} key={index+1} borrarGenero={borrarGenero} editarGenero={editarGenero}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
