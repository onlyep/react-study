import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header password={123123}/>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<Footer userId={123456}/>
				{/*Footer/>*/}
			</div>
		);
	}
}

export default App;
