function form(state=[], action){
	if(action.type=="CHANGE"){
		return {id:action.id, content: action.content};
	} else {
		return state;
	}
}

export default form;

