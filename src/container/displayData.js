import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/fetchData'
import DataPara from '../components/dataPara'
import './displayData.css'

class Orders extends Component{

    state={
        value:" ",
        disableButton:true
    }

    inputChangeHandler = (event)=>{
        let newValue = encodeURIComponent(event.target.value)
        this.setState({
            value:newValue
        })
       
    }

    render(){
      
        let test2=[];
        
        if(this.props.fetchDataList !== []){
            const test = Object.keys( this.props.fetchDataList).map((igKey) => {
                return this.props.fetchDataList[igKey];
            })
    
            for(let igsKey in test){
                test2.push(test[igsKey])
            }
        
        }
        const ayush = test2.map(name=>{
            return <DataPara name={name['Name']}
            district={name["District"]}
            BranchType={name["BranchType"]} 
            State={name["State"]} 
            Country={name["Country"]} 
            Block={name["Block"]} 
            Region={name["Region"]} 
            Circle={name["Circle"]} 
            Division={name["Division"]} 
              />
        })

        return(
          <div className='DisplayData'>
          <div className='center'>
          <input  placeholder='Enter 6 digit Pin Code' onChange={(event)=>this.inputChangeHandler(event)} type="text"/>
          <br/>
              <button  onClick={()=>this.props.onFetchData(this.state.value)} >Submit</button>
          </div>
             {ayush}
          </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
     fetchDataList:state.fetchData.data
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onFetchData : (value)=>dispatch(actions.fetchData(value))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Orders) ;
