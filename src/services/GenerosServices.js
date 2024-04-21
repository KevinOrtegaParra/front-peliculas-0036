import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerGeneros = (estado = true) => {
    return axiosConfig.get('genero?Estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const CrearGenero = (data={}) =>{
    return axiosConfig.post('genero',data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const EditarGenero = (id,data={}) =>{
    return axiosConfig.put('genero/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const BorrarGenero = (id) =>{
    return axiosConfig.delete('genero/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerGeneros,
    CrearGenero,
    EditarGenero,
    BorrarGenero
}