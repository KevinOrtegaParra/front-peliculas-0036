import React from "react"
import dayjs from "dayjs"

export default function TrGenero({genero=[],index}) {
    return (
        <tr >
            <th scope="row">{index + 1}</th>
            <td>{genero.nombre}</td>
            <td>{genero.Descripción}</td>
            <td>{genero.Estado === true ? 'Activo' : 'Inactivo'}</td>
            <td>{dayjs(genero.FechaCreación).format('YYYY/MM/DD')}</td>
            <td><button type="button" className="btn btn-outline-success">Success</button><button type="button" className="btn btn-outline-danger">Danger</button></td>
        </tr>
    )

}