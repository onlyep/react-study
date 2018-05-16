import React, { Component } from 'react';

export default class HeaderChildson extends Component {
	render() {
		return (
			<div>
				<p>孙子页面</p>
				<p>{this.props.password}</p>
			</div>
		);
	}
}