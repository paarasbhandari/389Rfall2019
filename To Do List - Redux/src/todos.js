import React from 'react'

import {connect} from 'react-redux'

class Todos extends React.Component{

	

render(){
	var Delete = (i) => {
	var delAction = {type:"DEL",id:i};
	this.props.dispatch(delAction);
	}


	const todoList = this.props.todos.map((todo) => {
		return (<div>
			<span>
				<div class="item" onClick={()=>Delete(todo.id)}> {todo.text} </div>
			</span>

		 </div>)
	});
	if (this.props.todos.length){

		return ( <div>
			{todoList}
		</div>
		);
	} else {
		return (<p> You have nothing to do! </p>);
	}
	}
}

function mapStateToProps(state){
	return {
		todos: state.todos,
	};
}

export default connect(mapStateToProps)(Todos);


