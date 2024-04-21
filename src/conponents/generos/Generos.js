import React, { useEffect, useState } from "react"
import { ObtenerGeneros, CrearGenero, BorrarGenero, EditarGenero } from "../../services/GenerosServices"
import Table from "./Table"
import Error from "./Error"
import Toggle from "./Toggle"
import Modal from "./Modal"

export default function Generos() {

    const [modoEdicion, setModoEdicion] = useState(false)
    const [generoEditarID, setGeneroEditarID] = useState(null)
    const [generos, setGeneros] = useState([])
    const [estado, setEstado] = useState(false)
    const [error, setError] = useState(false)
    const [genero, setGenero] = useState({
        nombre: '',
        Estado: true,
        Descripción: ''
    })

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

    const handleChange = e => {
        setGenero({
            ...genero,
            [e.target.name]: e.target.value
        })
    }

    const guardar = async (id) => {
        try {
            if (modoEdicion) {
                await EditarGenero(generoEditarID, genero)
            } else {
                await CrearGenero(genero)
            }
            obtenerTodo()
            setGenero({
                "nombre": '',
                "Estado": true,
                "Descripción": ''
            })
            setModoEdicion(false)
            setGeneroEditarID(null)
            setEstado(true)
        } catch (error) {
            console.log(error)
        }
    }

    const editarGenero = (id) => {
        const generoEditar = generos.find(genero => genero._id === id)
        if (generoEditar) {
            setGenero(generoEditar)
            setModoEdicion(true)
            setGeneroEditarID(id)
        }
    }

    const handleClose = () => {
        setGenero({
            "nombre": '',
            "Estado": true,
            "Descripción": ''
        })
        setModoEdicion(false) // Cambiar modoEdicion a false al cerrar el modal
        setGeneroEditarID(null)
    };

    const borrarGenero = async (id) => {
        try {
            const resp = await BorrarGenero(id)
            obtenerTodo()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Toggle cambiarEstado={cambiarEstado} />
            {error ? <Error /> : <Table generos={generos} borrarGenero={borrarGenero} editarGenero={editarGenero} />}
            <Modal genero={genero} handleChange={handleChange} guardar={guardar} modoEdicion={modoEdicion} handleClose={handleClose}/>
        </>
    )
}

