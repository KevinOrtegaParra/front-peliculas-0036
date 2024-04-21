import React, { useEffect, useState } from "react"
import { BorrarDirector, CrearDirector, EditarDirector, ObtenerDirectores } from "../../services/DirectoresServices"
import Table from "./Table"
import Error from "./Error"
import Toggle from "./Toggle"
import Modal from "./Modal"

export default function Directores() {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [directorEditarID, setDirectorEditarID] = useState(null)
    const [directores, setDirectores] = useState([])
    const [estado, setEstado] = useState(false)
    const [error, setError] = useState(false)
    const [director, setDirector] = useState({
        Nombre: '',
        Estado: true,
    })

    useEffect(() => {
        obtenerTodo()
    }, [estado])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerDirectores(estado)
            setDirectores(data)
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

    const handleChange = e => {
        setDirector({
            ...director,
            [e.target.name]: e.target.value
        })
    }

    const guardar = async (id) => {
        try {
            if (modoEdicion) {
                await EditarDirector(directorEditarID, director)
            } else {
                await CrearDirector(director)
            }
            obtenerTodo()
            setDirector({
                "Nombre": '',
                "Estado": true,
            })
            setModoEdicion(false) 
            setDirectorEditarID(null)
            setEstado(true)
        } catch (error) {
            console.log(error)
        }
    }

    const editardirector = (id) => {
        const directorEditar = directores.find(director => director._id === id)
        if (directorEditar) {
            setDirector(directorEditar)
            setModoEdicion(true)
            setDirectorEditarID(id)
        }
    }

    const handleClose = () => {
        setDirector({
            "Nombre": '',
            "Estado": true,
        })
        setModoEdicion(false) // Cambiar modoEdicion a false al cerrar el modal
        setDirectorEditarID(null) 
    };

    const borrardirector = async (id) => {
        try {
            const resp = await BorrarDirector(id)
            obtenerTodo()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Toggle cambiarEstado={cambiarEstado} />
            {error ? <Error /> : <Table directores={directores} borrardirector={borrardirector} editardirector={editardirector}/>}
            <Modal director={director} handleChange={handleChange} guardar={guardar} modoEdicion={modoEdicion} handleClose={handleClose}/>
        </>
    )
}