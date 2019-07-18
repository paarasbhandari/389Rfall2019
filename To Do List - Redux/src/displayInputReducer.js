function displayInput(state=false, action){
	if(action.type=="SWITCH"){
		return !state;
	} else {
		return state;
	}
}

export default displayInput;