import React, { useEffect, useState } from "react"
import { ObtenerGeneros } from "../../services/GenerosServices"
import Table from "./Table"

export default function Generos() {
    useEffect(() => {
        obtenerTodo()
    }, [])

    const [generos,setGeneros] = useState([])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerGeneros()
            setGeneros(data)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <div>
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
                {
                    generos.map((genero,index) => {
                        return(
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{genero.nombre}</td>
                            <td>{genero.Descripción}</td>
                            <td>{genero.Estado === true? 'Activo':'inactivo'}</td>
                            <td>{genero.FechaCreación}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
