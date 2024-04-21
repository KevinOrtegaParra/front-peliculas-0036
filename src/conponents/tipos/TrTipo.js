import React from "react"
import dayjs from "dayjs"

export default function TrTipo({ tipo = [], index, borrarTipo, editarTipo}) {
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{tipo.Nombre}</td>
            <td>{tipo.Descripción}</td>
            <td>{dayjs(tipo.FechaCreación).format('YYYY/MM/DD')}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editarTipo(tipo._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrarTipo(tipo._id)}>Borrar</button>
            </td>
        </tr>
    )

}