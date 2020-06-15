import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.postalpincode.in/postoffice/',
    
})

export default instance;