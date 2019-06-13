import React from 'react';
import {connect} from 'react-redux';
import {updateState} from '../Actions/loginInformation.js';
import {updateState1} from '../Actions/loginInformation.js';
import {submit} from '../Actions/loginInformation.js';
class Register extends React.Component
 {
	render()
	{
	
	return(
		<div>
		<div class="col-sm-6 videoContainer">
			<div class="login form-control col-sm-12">
				<form action="#">
					<h2>Register</h2>
					<div class="form-group ">
						<label for="pwd">FirstName:</label>  
						<input type = "text" class="form-control" value = {this.props.username}  onChange = {username => this.props.dispatch(updateState(username))} />
					</div>
                    <div class="form-group ">
						<label for="pwd">LastName:</label>  
						<input type = "text" class="form-control" value = {this.props.username}  onChange = {username => this.props.dispatch(updateState(username))} />
					</div>
                    <div class="form-group ">
						<label for="pwd">Email:</label>  
						<input type = "text" class="form-control" value = {this.props.username}  onChange = {username => this.props.dispatch(updateState(username))} />
					</div>
                    <div class="form-group ">
						<label for="pwd">PhoneNumber:</label>  
						<input type = "text" class="form-control" value = {this.props.username}  onChange = {username => this.props.dispatch(updateState(username))} />
					</div>
					<div class="form-group">
						<label for="pwd">password:</label>  
						<input type = "password" class="form-control" value = {this.props.password}  onChange = {password =>this.props.dispatch(updateState1(password))} />
					</div>
					<button  class="btn btn-info"  onClick = {()=>this.props.dispatch(submit())}>Sbmit</button>
				</form>
				<h6>{this.props.mess}</h6>
			</div>
		</div>        

</div>)
}
}
function mapStateToProps(state)
{
	console.log("mapStateToProps",state);
	return{
    username:state.username,
    password:state.password,
	mess: state.mess,
	isOpen:state.isOpen
	
}

}

export default connect(mapStateToProps)(Register);
//export default Register;