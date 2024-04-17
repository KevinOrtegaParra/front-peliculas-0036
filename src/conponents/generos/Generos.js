import React, { useEffect, useState } from "react"
import { ObtenerGeneros } from "../../services/GenerosServices"
import Table from "./Table"
import Error from "./Error"
import Toggle from "./Toggle"

export default function Generos() {

    const [generos, setGeneros] = useState([])
    const [estado, setEstado] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        obtenerTodo()
    }, [estado])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerGeneros(estado)
            setGeneros(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }

    const cambiarEstado = () => {
        setEstado(!estado)
    }

    return (
        <>
            <Toggle cambiarEstado={cambiarEstado} estado={estado} />
            {error ? <Error /> : <Table generos={generos} />}
        </>
    )
}

