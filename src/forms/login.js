import React, { Component } from 'react';
import './App.css';

class Login extends Component {
	constructor() {
		super();
		this.state = {
	   	};
		this.clear = this.clear.bind(this);
		this.login = this.login.bind(this);
	}

	componentDidMount() {
	}

	componentWillUnMount() {
	}

	login(){
		if (this.refs.uid.value === this.refs.pwd.value) {
			alert('both are equal');
		} else {
			alert('not equal');
		}
	}


	clear(){
		this.refs.uid.value="";
		this.refs.pwd.value="";
		this.refs.uid.focus();
	}


  render() {
 	return (

			<div className="App">
			  <form>
			    <table className="App-header">
					<tbody>
					<th><td>Login Form</td></th>
					<tr><td span="2">User ID</td><td><input type="text" ref="uid"/></td></tr>
					<tr><td>Password</td><td><input type="password" ref="pwd"/></td></tr>
					<tr><td><input type="Button" value="Login" onClick={this.login}/>
					<input type="Button" value="Reset" onClick={this.clear}/></td></tr>
					</tbody>
				</table>
				</form>
			</div>

    );
  }
}

export default Login;
