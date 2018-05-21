import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import '../less/footer.less';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="title">页脚</div>
				<Input placeholder="Basic usage" />
				<div>{this.props.userId}</div>
			</footer>
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