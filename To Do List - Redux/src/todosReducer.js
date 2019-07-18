function todos(state=[], action){
	if(action.type=="ADD"){
		var newArr = state.concat({id:action.nextID, text: action.text});
		return newArr;
	} else if (action.type=="DEL"){
		var newArr = state.filter(value=>value.id!=action.id);
		return newArr;
	} else {
		return state;
	}
}

export default todos;

