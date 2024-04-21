import React, { useEffect, useState } from "react"
import {ObtenerTipos, CrearTipo, BorrarTipo, EditarTipo } from "../../services/TiposServices"
import Table from "./Table"
import Error from "./Error"
import Modal from "./Modal"

export default function Tipo() {
    const [modoEdicion, setModoEdicion] = useState(false)
    const [tipoEditarID, setTipoEditarID] = useState(null)
    const [tipos, setTipos] = useState([])
    const [error, setError] = useState(false)
    const [tipo, setTipo] = useState({
        Nombre: '',
        Estado: true,
        Descripción: ''
    })

    useEffect(() => {
        obtenerTodo()
    },[])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerTipos()
            setTipos(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }

    const handleChange = e => {
        setTipo({
            ...tipo,
            [e.target.name]: e.target.value
        })
    }

    const guardar = async (id) => {
        try {
            if (modoEdicion) {
                await EditarTipo(tipoEditarID, tipo)
            } else {
                await CrearTipo(tipo)
            }
            obtenerTodo()
            setTipo({
                "Nombre": '',
                "Estado": true,
                "Descripción": ''
            })
            setModoEdicion(false) 
            setTipoEditarID(null)
        } catch (error) {
            console.log(error)
        }
    }

    const editarTipo = (id) => {
        const tipoEditar = tipos.find(tipo => tipo._id === id)
        if (tipoEditar) {
            setTipo(tipoEditar)
            setModoEdicion(true)
            setTipoEditarID(id)
        }
    }

    const handleClose = () => {
        setTipo({
            "Nombre": '',
            "Estado": true,
            "Descripción": ''
        })
        setModoEdicion(false) // Cambiar modoEdicion a false al cerrar el modal
        setTipoEditarID(null) 
    };

    const borrarTipo = async (id) => {
        try {
            const resp = await BorrarTipo(id)
            obtenerTodo()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            {error ? <Error /> : <Table tipos={tipos} borrarTipo={borrarTipo} editarTipo={editarTipo}/>}
            <Modal tipo={tipo} handleChange={handleChange} guardar={guardar} modoEdicion={modoEdicion} handleClose={handleClose}/>
        </>
    )
}