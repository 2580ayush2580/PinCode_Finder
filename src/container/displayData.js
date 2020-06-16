import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/fetchData'
import DataPara from '../components/dataPara'
import './displayData.css'
import Spinner from '../components/UI/spinner'

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
        let ayush=null;
        
        if(this.props.data!=="No records found"){
            const test = Object.keys( this.props.fetchDataList).map((igKey) => {
                return this.props.fetchDataList[igKey];
            })
    
            for(let igsKey in test){
                test2.push(test[igsKey])
            }
        
         ayush = test2.map(name=>{
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

        }else{
            ayush=<p className="DisplayData"><div className="center Design">No records found ...</div></p>

        }
          
        if(this.props.loading){
            ayush=<Spinner/>
        }

        if(this.props.error){
            ayush = <p className="DisplayData"><div className="center Design">Something went wrong ...</div></p>
        }

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
     fetchDataList:state.fetchData.data,
     error:state.fetchData.error,
     loading:state.fetchData.loading,
     data:state.fetchData.data2
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onFetchData : (value)=>dispatch(actions.fetchData(value))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Orders) ;
