import React from 'react'
import "./App.css"

class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      tapeButtons:[
        {value:"1" ,type:"default"},
        {value:"2" , type:'default'},
        {value:"3", type:'default'},
        {value:"+", type:'sign'},
        {value:"4", type:'default'},
        {value:"5" , type:'default'},
        {value:"6" , type:'default'},
        {value:"-" , type:'sign'},
        {value:"7" , type:'default'},
        {value:"8" , type:'default'},
        {value:"9" , type:'default'},
        {value:"*" , type:'sign'},
        {value:"0" , type:'default'},
        
      ],
      operationButtons:[
        {value:"C", type:'default'},
        {value:"=", type:'default'},
        {value:"/" , type:'sign'},

      ],
      outputValue:'0'
       
    }
    this.outputRef=React.createRef()
  }

  handleClickButtons = (value) => {
    let currentValue=value
    let output=this.outputRef.current

    this.setState({
      outputValue:currentValue
    })

     if(output.value === '0') { output.value=""}
    output.value+=currentValue
    
  } 

  handleOperateValue =(value)=>{
    let currentValue=value
    let output=this.outputRef.current
    if(value==="C"){
      if(output.value==="0"){output.value="0"}
      else output.value=output.value.substring(0,output.value.length-1)
    }
    else if(value==="="){
      output.value=eval(output.value)
    }
    else if(value==="/"){
      this.setState({
        outputValue:currentValue
      })
  
       if(output.value === '0') { output.value=""}
      output.value+=currentValue

    }
  }

    disableButtons

  


  render(){
    return(
      <>
      <div className="calculator">
        <div className="output">
          <input type="text" defaultValue={this.state.outputValue} ref={this.outputRef} />
        </div>

        <div className='buttons'>
          {this.state.tapeButtons.map((el,index)=>{
           if(el.type==="default") {return (<button className='lg' key={index} onClick={()=>this.handleClickButtons(el.value)}>{el.value}</button>)}
            else return (<button className='or' key={index} onClick={()=>this.handleClickButtons(el.value)} >{el.value}</button>)
          })}
          {this.state.operationButtons.map((el,index)=>{
           if(el.type==="default") {return (<button className='lg' key={index} onClick={()=>this.handleOperateValue(el.value)}>{el.value}</button>)}
            else return (<button className='or' key={index} onClick={()=>this.handleOperateValue(el.value)}>{el.value}</button>)
          })}
          

        </div>

      </div>
      </>
    )
  }
}

export default App
