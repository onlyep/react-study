import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Minxin from './mixin';
import logo from '../logo.svg';
import HeaderChild from './headerChild';

class Header extends Component {
	constructor() {
		super(); // 调用基类所有的初始化方法
		this.state = { username: 'katy', age: 20 };
	}

	changeUser(name) {
		this.setState({ username: name });
		//第一种更改dom的方法
		// let myButton = document.getElementById('my-button');
		// ReactDom.findDOMNode(myButton).style.background = 'green';
		//第二种更改dom的方法
		console.log(this.refs.myButton);
		this.refs.myButton.style.background = 'red';
		Minxin.log();
	}

	handleChildValueChange(event) {
		this.setState({ age: event.target.value });
	}

	render() {
		// setTimeout(() => {
		// 	this.setState({ username: 'onlyep' });
		// }, 5000);
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<h1 className="App-title">{this.state.username}{this.state.age}</h1>
				<hr/>
				<p>父组件age：{this.state.age}</p>
				<HeaderChild {...this.props} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
				<input id="my-button" ref="myButton" type="button" value="提交" onClick={this.changeUser.bind(this, 1000)}/>
			</header>
		);
	}
}

export default Header;