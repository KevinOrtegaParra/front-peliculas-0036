import { axiosConfig } from "../configurations/axiosConfig"


const ObtenerGeneros = () => {
    return axiosConfig.get('genero?Estado=true', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export{
    ObtenerGeneros
}