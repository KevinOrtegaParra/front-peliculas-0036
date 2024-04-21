import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerMedia = () => {
    return axiosConfig.get('media', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const CrearMedia = (data={}) =>{
    return axiosConfig.post('media',data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const EditarMedia = (id,data={}) =>{
    return axiosConfig.put('media/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const BorrarMedia = (id) =>{
    return axiosConfig.delete('media/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerMedia,
    CrearMedia,
    EditarMedia,
    BorrarMedia
}