import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
	render() {
		return (
			<footer>页脚{this.props.userId}</footer>
		);
	}
}

// 为属性添加默认值
Footer.defaultProps = {
	userId: '我是默认值'
};
Footer.propTypes = {
	userId: PropTypes.number.isRequired
};

export default Footer;