import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerDirectores = (estado = true) => {
    return axiosConfig.get('director/?Estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const CrearDirector = (data={}) =>{
    return axiosConfig.post('director',data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const EditarDirector = (id,data={}) =>{
    return axiosConfig.put('director/'+id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const BorrarDirector = (id) =>{
    return axiosConfig.delete('director/'+id, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerDirectores,
    CrearDirector,
    EditarDirector,
    BorrarDirector
}