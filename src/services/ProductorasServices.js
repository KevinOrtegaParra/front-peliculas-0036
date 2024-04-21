import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerProductoras = (estado = true) => {
    return axiosConfig.get('productora?Estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const CrearProductora = (data={}) =>{
    return axiosConfig.post('productora',data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const EditarProductora = (id,data={}) =>{
    return axiosConfig.put('productora/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const BorrarProductora = (id) =>{
    return axiosConfig.delete('productora/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerProductoras,
    CrearProductora,
    EditarProductora,
    BorrarProductora
}