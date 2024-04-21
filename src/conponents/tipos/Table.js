import React from "react"
import TrTipo from "./TrTipo"

export default function Table({tipos = [], borrarTipo, editarTipo}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                {
                    tipos.map((tipo, index) => {
                        return (
                            <TrTipo tipo={tipo} index={index} key={index+1} borrarTipo={borrarTipo} editarTipo={editarTipo}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
