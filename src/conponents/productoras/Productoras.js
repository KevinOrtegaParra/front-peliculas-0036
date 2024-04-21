import React, { useEffect, useState } from "react"
import { ObtenerProductoras, CrearProductora, BorrarProductora, EditarProductora } from "../../services/ProductorasServices"
import Table from "./Table"
import Error from "./Error"
import Toggle from "./Toggle"
import Modal from "./Modal"

export default function Productora() {

    const [modoEdicion, setModoEdicion] = useState(false)
    const [productoraEditarID, setProductoraEditarID] = useState(null)
    const [productoras, setProductoras] = useState([])
    const [estado, setEstado] = useState(false)
    const [error, setError] = useState(false)
    const [productora, setProductora] = useState({
        Nombre: '',
        Estado: true,
        Slogan: '',
        Descripción: ''
    })

    useEffect(() => {
        obtenerTodo()
    }, [estado])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerProductoras(estado)
            setProductoras(data)
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
        setProductora({
            ...productora,
            [e.target.name]: e.target.value
        })
    }

    const guardar = async (id) => {
        try {
            if (modoEdicion) {
                await EditarProductora(productoraEditarID, productora)
            } else {
                await CrearProductora(productora)
            }
            obtenerTodo()
            setProductora({
                "Nombre": '',
                "Estado": true,
                "Slogan": '',
                "Descripción": ''
            })
            setModoEdicion(false)
            setProductoraEditarID(null)
            setEstado(true)
        } catch (error) {
            console.log(error)
        }
    }

    const editarProductora = (id) => {
        const productoraEditar = productoras.find(productora => productora._id === id)
        if (productoraEditar) {
            setProductora(productoraEditar)
            setModoEdicion(true)
            setProductoraEditarID(id)
        }
    }

    const handleClose = () => {
        setProductora({
            "Nombre": '',
            "Estado": true,
            "Slogan": '',
            "Descripción": ''
        })
        setModoEdicion(false) // Cambiar modoEdicion a false al cerrar el modal
        setProductoraEditarID(null) 
    };

    const borrarProductora = async (id) => {
        try {
            const resp = await BorrarProductora(id)
            obtenerTodo()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Toggle cambiarEstado={cambiarEstado} />
            {error ? <Error /> : <Table productoras={productoras} borrarProductora={borrarProductora} editarProductora={editarProductora}/>}
            <Modal productora={productora} handleChange={handleChange} guardar={guardar} modoEdicion={modoEdicion} handleClose={handleClose}/>
        </>
    )
}