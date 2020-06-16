import * as actionTypes from './actionTypes'
import axios from '../../axios/axiosPin'

export const fetchDataSuccess = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS,
        data:data
    }
}

export const fetchDataSuccess2 = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS2,
        data2:data
    }
}

export const fetchDataFail = (error) => {
    return{
        type:actionTypes.FETCH_DATA_FAIL,
        error:error
    }
}

export const fetchDataStart = () => {
    return{
        type:actionTypes.FETCH_DATA_sTART
    }
}

export const fetchData = (value) => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get(value)
            .then(response => {
           
            dispatch(fetchDataSuccess(response.data[0].PostOffice));
           
            dispatch(fetchDataSuccess2(response.data[0]["Message"]));
           
           }).catch(error=>{
               dispatch(fetchDataFail(error));
           })
    }
}