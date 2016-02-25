import React from "react"

class App extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
    return (
      <div className="something">GET WRECKED {this.props.name}</div>
    )
  }
}

export default App
