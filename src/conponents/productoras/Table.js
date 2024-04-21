import React from "react"
import TrProductora from "./TrProductora"

export default function Table({productoras = [], borrarProductora, editarProductora}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Slogan</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                {
                    productoras.map((productora, index) => {
                        return (
                            <TrProductora productora={productora} index={index} key={index+1} borrarProductora={borrarProductora} editarProductora={editarProductora}/>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
