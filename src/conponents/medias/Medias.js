import React, { useEffect, useState } from "react"
import { ObtenerMedia, CrearMedia, BorrarMedia, EditarMedia } from "../../services/MediasServices"
import { ObtenerGeneros } from "../../services/GenerosServices"
import { ObtenerDirectores } from "../../services/DirectoresServices"
import { ObtenerProductoras } from "../../services/ProductorasServices"
import { ObtenerTipos } from "../../services/TiposServices"
import Table from "./Table"
import Error from "./Error"
import Modal from "./Modal"

export default function Media() {

    const [modoEdicion, setModoEdicion] = useState(false)
    const [mediaEditarID, setMediaEditarID] = useState(null)
    const [generos, setGeneros] = useState([])
    const [directores, setDirectores] = useState([])
    const [productoras, setProductoras] = useState([])
    const [tipos, setTipos] = useState([])
    const [medias, setMedias] = useState([])
    const [error, setError] = useState(false)
    const [media, setMedia] = useState({
        Serial: '',
        Titulo: '',
        Sinopsis: '',
        UrlPelicula: '',
        ImagenPortada: '',
        AnioEstreno: '',
        GeneroPrincipal: '',
        DirectorPrincipal: '',
        Productora: '',
        Tipo: ''
    })

    useEffect(() => {
        obtenerTodo()
    }, [])

    const obtenerTodo = async () => {
        try {
            const { data } = await ObtenerMedia()
            setMedias(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }

    const handleChange = e => {
        setMedia({
            ...media,
            [e.target.name]: e.target.value
        })
    }

    const guardar = async (id) => {
        try {
            if (modoEdicion) {
                await EditarMedia(mediaEditarID, media)
            } else {
                await CrearMedia(media)
            }
            obtenerTodo()
            setMedia({
                "Serial": '',
                "Titulo": '',
                "Sinopsis": '',
                "UrlPelicula": '',
                "ImagenPortada": '',
                "AnioEstreno": '',
                "GeneroPrincipal": '',
                "DirectorPrincipal": '',
                "Productora": '',
                "Tipo": ''
            })
            setModoEdicion(false)
            setMediaEditarID(null)
        } catch (error) {
            console.log(error)
        }
    }

    const editarMedia = (id) => {
        const mediaEditar = medias.find(media => media._id === id)
        if (mediaEditar) {
            setMedia(mediaEditar)
            setModoEdicion(true)
            setMediaEditarID(id)
        }
    }

    const handleClose = () => {
        setMedia({
            "Serial": '',
            "Titulo": '',
            "Sinopsis": '',
            "UrlPelicula": '',
            "ImagenPortada": '',
            "AnioEstreno": '',
            "GeneroPrincipal": '',
            "DirectorPrincipal": '',
            "Productora": '',
            "Tipo": ''
        })
        setModoEdicion(false) // Cambiar modoEdicion a false al cerrar el modal
        setMediaEditarID(null) 
    };

    const borrarMedia = async (id) => {
        try {
            const resp = await BorrarMedia(id)
            obtenerTodo()
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerGenero()
    }, [])

    const obtenerGenero = async () => {
        try {
            const { data } = await ObtenerGeneros(true)
            setGeneros(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }
    useEffect(() => {
        obtenerDirectores()
    }, [])

    const obtenerDirectores = async () => {
        try {
            const { data } = await ObtenerDirectores(true)
            setDirectores(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }
    useEffect(() => {
        obtenerProductoras()
    }, [])

    const obtenerProductoras = async () => {
        try {
            const { data } = await ObtenerProductoras(true)
            setProductoras(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }
    useEffect(() => {
        obtenerTipos()
    }, [])

    const obtenerTipos = async () => {
        try {
            const { data } = await ObtenerTipos(true)
            setTipos(data)
            if (error) {
                setError(false)
            }
        } catch (e) {
            console.error(e)
            setError(true)
        }
    }
    return (
        <>
            {error ? <Error /> : <Table medias={medias} borrarMedia={borrarMedia} editarMedia={editarMedia} />}
            <Modal media={media} handleChange={handleChange} guardar={guardar} modoEdicion={modoEdicion} generos={generos} directores={directores} productoras={productoras} tipos={tipos} handleClose={handleClose}/>
        </>
    )
}

