import * as actionTypes from './actionTypes'
import axios from '../../axios/axiosAddress'

export const fetchDataSuccessByAddress = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS_BY_ADDRESS,
        data:data
    }
}

export const fetchDataSuccess2ByAddress = (data) => {
    return{
        type:actionTypes.FETCH_DATA_SUCCESS_BY_ADDRESS2,
        data2:data
    }
}

export const fetchDataFailByAddress = (error) => {
    return{
        type:actionTypes.FETCH_DATA_BY_ADDRESS_FAIL,
        error:error
    }
}

export const fetchDataStartByAddress = () => {
    return{
        type:actionTypes.FETCH_DATA_BY_ADDRESS_sTART
    }
}

export const fetchDataByAddress = (value) => {
    return dispatch => {
        dispatch(fetchDataStartByAddress());
        axios.get(value)
            .then(response => {
            dispatch(fetchDataSuccessByAddress(response.data[0].PostOffice));
            dispatch(fetchDataSuccess2ByAddress(response.data[0]["Message"]));
           }).catch(error=>{
               dispatch(fetchDataFailByAddress(error));
           })
    }
}