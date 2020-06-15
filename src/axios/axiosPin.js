import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.postalpincode.in/pincode/',
    
})

export default instance; 