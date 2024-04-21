import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerTipos = () => {
    return axiosConfig.get('tipo', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const CrearTipo = (data={}) =>{
    return axiosConfig.post('tipo',data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const EditarTipo = (id,data={}) =>{
    return axiosConfig.put('tipo/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const BorrarTipo = (id) =>{
    return axiosConfig.delete('tipo/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerTipos,
    CrearTipo,
    EditarTipo,
    BorrarTipo
}