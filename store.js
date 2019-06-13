
import {createStore} from 'redux';


const initialState={
	count:4,a:20,username:"",password:"",mess:"", isOpen: false,firstname:"",lastname:"",phone:""
};
const reducer=(state=initialState,action)=>
{
	console.log("reducer",action);
		switch(action.type)
		{
		case 'INCREMENT':
		
			return Object.assign({},state,{count:state.count+1,a:state.a+6});
		case 'UPDATEUSR':
			return Object.assign({},state,{username:action.payload});
		case 'UPDATEPASSWORD':
			return Object.assign({},state,{password:action.pw});
		case 'TOGGLE':
			return Object.assign({},state,{isOpen:!this.state.isOpen});
	    case 'SUBMIT':
	        if(state.username == "praveen" && state.password== "pra"){
	        	// alert("fgcdygsvdghgy");
	        	state.mess = "Successfully loged in ......"
			   return Object.assign({},state,{mess:state.mess});
			}else{
				state.mess = " Wrong UserName And Password.........."
				 return Object.assign({},state,{error:state.mess});
			}
		;default:
		return state
	}
	return state;
}
const store=createStore(reducer);
export default store;