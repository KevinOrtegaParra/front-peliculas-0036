import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerGeneros = (estado = true) => {
    return axiosConfig.get('genero?Estado='+estado, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerGeneros
}