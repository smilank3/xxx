




import React from 'react';

import ReactDom from 'react-dom';

class App extends React.Component{
	render(){
		var create=React.createElement;

		return create('div',null,create('h1',null,"HEADING ONE"),
			create('h2',null,'HEADING TWO'),create('h3',null,'HEADING THREE'))
	}
}

ReactDom.render(
	<App/>,
	document.getElementById('app')
	);

ReactDom.render(
	<div>React form</div>,
	document.getElementById('form'))


