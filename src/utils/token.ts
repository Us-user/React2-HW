import axios from 'axios'


export const saveToken=(access,refresh)=>{
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
}


const getToken=()=>{
    return localStorage.getItem('access')
}

export const axiosRequest=axios.create({
    baseURL: import.meta.env.VITE_API
})

axiosRequest.interceptors.request.use(
    (config) => {
        const token= getToken()

        if(token){
            config.headers['Authorization']=`Bearer ${token}`
        }

        return config
    }
)