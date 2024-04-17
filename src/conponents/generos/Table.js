import React, { useEffect } from "react"

export default function Table() {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                            <label className="form-check-label" for="flexSwitchCheckChecked">Activo</label>
                        </div>
                    </th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                </tr>
            </tbody>
        </table>
    )
}
