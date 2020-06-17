import React,{Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/fetchData'
import * as actionsByAddress from '../store/actions/fetchDataByAddress'
import DataPara from '../components/dataPara'
import './displayData.css'
import Spinner from '../components/UI/spinner'

class Orders extends Component{

    state={
        value:"",
        searchByAddress:false,
        placeholderValue:true
    }

    inputChangeHandler = (event)=>{
        let newValue = event.target.value
        this.setState({
            value:newValue
        })
       
    }

    searchHandler = () => {
        this.setState(prevState => {
            return { placeholderValue : ! prevState.placeholderValue,searchByAddress : ! prevState.searchByAddress}
        })
    }

    render(){
         
        if(!this.state.searchByAddress){

            let test2=[];
            let i=0;
            let ayush=null;
        
            if(this.props.data!=="No records found"){
                    const test = Object.keys( this.props.fetchDataList).map((igKey) => {
                    return this.props.fetchDataList[igKey];
                })
    
                for(let igsKey in test){
                   test2.push(test[igsKey])
                }
        
                ayush = test2.map(name=>{
                    return (<DataPara 
                        key={++i}
                        name={name['Name']}
                        district={name["District"]}
                        BranchType={name["BranchType"]} 
                        State={name["State"]} 
                        Country={name["Country"]} 
                        Block={name["Block"]} 
                        Region={name["Region"]} 
                        Circle={name["Circle"]} 
                        Division={name["Division"]} 
                    />)
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
                   <input  placeholder={this.state.placeholderValue ? "Enter 6 digit Pin Code" : "Enter Your City"} onChange={(event)=>this.inputChangeHandler(event)} type={this.state.placeholderValue? "number" : "text"}/>
                   <br/>
                   <button  onClick={this.state.searchByAddress ? () => this.props.onFetchDataByAdress(this.state.value)    : ()=>this.props.onFetchData(this.state.value)} >Submit</button>
                   <br/>
                   <button style={{marginTop:'10px'}}  onClick={this.searchHandler} >Search By {this.state.placeholderValue ? "Address" : "Pin" }</button>
                </div>
                  {ayush}
              </div>
            )
        }else{

            let test2=[];
            let i=0;
            let ayush=null;
        
           if(this.props.dataFromAddress!=="No records found"){
                 const test = Object.keys( this.props.fetchDataListFromAddress).map((igKey) => {
                      return this.props.fetchDataListFromAddress[igKey];
                    })
    
                for(let igsKey in test){
                   test2.push(test[igsKey])
                }

        
                 ayush = test2.map(name=>{
                    return <DataPara 
                       key={++i}
                       name={name['Name']}
                       district={name["District"]}
                       BranchType={name["BranchType"]} 
                       State={name["State"]} 
                       Country={name["Country"]}
                       Pin={name["Pincode"]} 
                       Region={name["Region"]} 
                       Circle={name["Circle"]} 
                       Division={name["Division"]} 
                    />
                })
            }else{
              ayush=<p className="DisplayData"><div className="center Design">No records found ...</div></p>
            }
          
            if(this.props.loadingFromAddress){
                ayush=<Spinner/>
            }

             if(this.props.errorFromAddress){
               ayush = <p className="DisplayData"><div className="center Design">Something went wrong ...</div></p>
            }

          return(
              <div className='DisplayData'>
                <div className='center'>
                   <input  placeholder={this.state.placeholderValue ? "Enter 6 digit Pin Code" : "Enter Your City"} onChange={(event)=>this.inputChangeHandler(event)} type={this.state.placeholderValue? "number" : "text"}/>
                  <br/>
                  <button  onClick={this.state.searchByAddress ? () => this.props.onFetchDataByAdress(this.state.value)    : ()=>this.props.onFetchData(this.state.value)} >Submit</button>
                  <br/>
                  <button style={{marginTop:'10px'}}  onClick={this.searchHandler} >Search By {this.state.placeholderValue ? "Address" : "Pin" }</button>
                </div>
               {ayush}
            </div>
        )
    }
        
    }
}

const mapStateToProps = state =>{
    return{
     fetchDataList:state.fetchData.data,
     error:state.fetchData.error,
     loading:state.fetchData.loading,
     data:state.fetchData.data2,
     fetchDataListFromAddress:state.fetchDataByAddress.data,
     errorFromAddress:state.fetchDataByAddress.error,
     loadingFromAddress:state.fetchDataByAddress.loading,
     dataFromAddress:state.fetchDataByAddress.data2,
    }
}

const mapDispatchToProps = dispatch => {

    return{
        onFetchData : (value)=>dispatch(actions.fetchData(value)),
        onFetchDataByAdress : (value)=>dispatch(actionsByAddress.fetchDataByAddress(value)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Orders) ;
