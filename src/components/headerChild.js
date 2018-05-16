import React, { Component } from 'react';
import HeaderChildson from './headerChildson';

export default class HeaderChild extends Component {

	render() {
		return (
			<div>
				子页面输入：<input type="text" onChange={this.props.handleChildValueChange}/>
				<p>{this.props.password}</p>
				<HeaderChildson {...this.props}/>
			</div>
		);
	}

}