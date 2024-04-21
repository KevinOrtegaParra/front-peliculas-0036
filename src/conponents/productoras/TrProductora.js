import React from "react"
import dayjs from "dayjs"

export default function TrProductora({ productora = [], index, borrarProductora, editarProductora}) {
    
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{productora.Nombre}</td>
            <td>{productora.Slogan}</td>
            <td>{productora.Descripción}</td>
            <td>{productora.Estado === true ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(productora.FechaCreación).format('YYYY/MM/DD')}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={() => editarProductora(productora._id)}>Editar</button>
                <button type="button" className="btn btn-outline-danger" onClick={() => borrarProductora(productora._id)}>Borrar</button>
            </td>
        </tr>
    )

}