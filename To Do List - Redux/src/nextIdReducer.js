function nextID(state=0, action){
	if(action.type=="INC"){
		return state+1;
	} else if (action.type=="DEC"){
		return state-1;
	} else {
		return state;
	}
}

export default nextID;
