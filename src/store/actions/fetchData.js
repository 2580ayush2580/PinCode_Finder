import * as actionTypes from './actionTypes'
import axios from '../../axios/axiosPin'

export const fetchDataSuccess = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS,
        data:data
    }
}

export const fetchDataFail = () => {
    return{
        type:actionTypes.FETCH_DATA_FAIL
    }
}

export const fetchDataStart = () => {
    return{
        type:actionTypes.FETCH_DATA_sTART
    }
}

export const fetchData = (value) => {
    return dispatch => {
        axios.get(value)
        .then(response => {
            dispatch(fetchDataSuccess(response.data[0].PostOffice))
            // console.log(response.data)
        })
    }
}