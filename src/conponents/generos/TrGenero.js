import React from "react"
import dayjs from "dayjs"

export default function TrGenero({ genero = [], index, borrarGenero, editarGenero}) {
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.Descripción}</td>
            <td>{genero.Estado === true ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(genero.FechaCreación).format('YYYY/MM/DD')}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editarGenero(genero._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrarGenero(genero._id)}>Borrar</button>
            </td>
        </tr>
    )

}