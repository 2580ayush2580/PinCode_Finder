import * as actionTypes from '../actions/actionTypes'

const  initialState = {
    data:[],
    loading:false,
    error:null,
    data2:null
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_DATA_BY_ADDRESS_sTART:
            return{
                ...state,
                loading:true
            }
        case actionTypes.FETCH_DATA_SUCCESS_BY_ADDRESS:
            const newData = {
                ...action.data , 
               
           }
            return{
                ...state,
                data:newData,
                loading:false
            }
        case actionTypes.FETCH_DATA_SUCCESS_BY_ADDRESS2:
            return{
                ...state,
                data2:action.data2,
                loading:false
            }
        case actionTypes.FETCH_DATA_BY_ADDRESS_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer; 