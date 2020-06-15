import React from 'react'
import './dataPara.css'
import Aux from '../HOC/auxes'

const dataPara = (props)=>{
    return(
        <Aux>
            <div className='DataPara'>
            <p>Post Office Name : {props.name}</p>
            <p>BranchType : {props.BranchType}</p>
            <p>Block : {props.Block}</p>
            <p>Region : {props.Region}</p>
            <p>Division : {props.Division}</p>
            <p>District : {props.district}</p>
            <p>Circle : {props.Circle}</p>
            <p>State : {props.State}</p>
            <p>Country : {props.Country}</p>

            </div>
        </Aux>
    )
}

export default dataPara;