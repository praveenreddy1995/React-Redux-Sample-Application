import React from 'react';
import {connect} from 'react-redux';
import {onIncrementClick} from './Actions/loginInformation.js';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';
	import ReactPlayer from 'react-player';
	

class Counter extends React.Component
 {
	render()
	{
	
	return(
		<div>
		 <div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Praveen Reddy</NavbarBrand>
				<NavbarToggler onClick= {()=> this.props.dispatch(toggle())} />
				<Collapse isOpen={this.props.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="https://gaana.com/newrelease/telugu/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/LoginPage" >About Us</NavLink>
						</NavItem>
						<NavItem>
							<NavLink  href="/RegisterPage" >Services</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Gallery</NavLink>
						</NavItem> 
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Download
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
								PDF
								</DropdownItem>
								<DropdownItem>
								XL-Sheet
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
		<div class="increment">
		  <h1>This is My Page</h1>
		  <h3>Count: {this.props.count}</h3>
		  <h3>a: {this.props.a}</h3>
		  <button class="btn btn-info" onClick={()=> this.props.dispatch(onIncrementClick())}>click here</button>
		</div>
		<div class="col-sm-12 videoContainer">
			<div class="col-sm-12">
				<ReactPlayer url={[{src: 'big_buck_bunny.mp4', type: 'video/mp4'}]} className='react-player'  controls width='100%' height='100%'/>
			</div>
		</div>
          

		 
                 

</div>)
}
}
function mapStateToProps(state)
{
	console.log("mapStateToProps",state);
	return{
	count:state.count,
    a:state.a, 
    username:state.username,
    password:state.password,
	mess: state.mess,
	isOpen:state.isOpen
	
}

}

export default connect(mapStateToProps)(Counter);
//export default Counter;