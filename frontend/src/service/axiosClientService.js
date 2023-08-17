import axios from "axios";

export default function getAxiosClient() {

    const instance = axios.create({
        baseURL: 'http://localhost:8000'
    })
    // configurePreProcessing(instance)
    // configurePostProcessing(instance)
    return instance
}

// function configurePreProcessing(instance) {
//
//     instance.interceptors.request.use(
//         config => {
//             console.log('AXIOS: ' + localStorage.getItem('access_token'))
//             if (store.getters.getAccessToken === undefined) {
//                 return config
//             }
//             config.headers['Authorization'] = 'Bearer ' + store.getters.getAccessToken
//             return config
//         });
// }