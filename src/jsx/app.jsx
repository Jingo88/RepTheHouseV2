import React from "react"

class App extends React.Component{
   constructor(props){
     super(props)
   }
   render(){
    return (
    	<div id="blah">
	    	<p>We are Rep The House. A site meant to provide you as much information as possible in a user friendly manner...</p> 
	    	<h3>This is a test for props name. Welcome {this.props.name}</h3>
	    </div>
    )
  }
}

export default App
