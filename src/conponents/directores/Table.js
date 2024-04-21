import React from "react"
import TrDirector from "./TrDirector"

export default function Table({directores = [], borrardirector, editardirector}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                {
                    directores.map((director, index) => {
                        return (
                            <TrDirector director={director} index={index} key={index+1} borrardirector={borrardirector} editardirector={editardirector}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
