import * as actionTypes from '../actions/actionTypes'

const  initialState = {
    data:[]
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_DATA_SUCCESS:
            const newData = {
                ...action.data , 
               
           }
            return{
                ...state,
                data:newData
            }
        default:
            return state;
    }
}

export default reducer; 