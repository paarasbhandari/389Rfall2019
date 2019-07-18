import React from 'react';
import './App.css';
import Todos from './todos'
import InputForm from './inputForm'
import {connect} from 'react-redux'




class App extends React.Component {



showForm(){
	this.props.dispatch({type:"SWITCH"});
}

render(){

	  return (
	    <div class="items">
	    	<h1 class="title"> To Do List</h1>
	    		<Todos />
	    		<button class="addButton" onClick={()=>this.showForm()}> {!this.props.displayInput?"Add Task":"Cancel"} </button>
	    		<br/>
	    		<InputForm />
	    </div>
	  );
	}
}

function mapStateToProps(state){
	return {
	todos: state.todos,
	nextID: state.nextID,
	displayInput: state.displayInput
};
}

export default connect(mapStateToProps)(App);
