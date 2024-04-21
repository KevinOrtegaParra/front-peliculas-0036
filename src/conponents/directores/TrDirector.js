import React from "react"
import dayjs from "dayjs"

export default function TrDirector({ director = [], index, borrardirector, editardirector}) {
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{director.Nombre}</td>
            <td>{director.Estado === true ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(director.FechaCreación).format('YYYY/MM/DD')}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editardirector(director._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrardirector(director._id)}>Borrar</button>
            </td>
        </tr>
    )

}