import React from 'react'
import {connect} from 'react-redux'

class InputForm extends React.Component{


	change(e){
		this.props.dispatch({type:"CHANGE",content:e.target.value});
	}

	submit(){
		this.props.dispatch({type:"ADD",nextID:this.props.nextID, text: this.props.form.content});
		this.props.dispatch({type:"SWITCH"});
	}

	render(){
		if(this.props.displayInput){
			return (
			<div>
				<input type="hidden" value={this.props.nextID}   />
				<input type="text" onChange={(e)=>this.change(e)} placeholder="Enter task..." />
				<button onClick={()=>this.submit()}> Submit </button>
			</div> );
		} else {
			return null;
		}
	}
}

function mapStateToProps(state){
	return {
		nextID: state.nextID,
		form: state.form,
		displayInput: state.displayInput
	};
}

export default connect(mapStateToProps)(InputForm);