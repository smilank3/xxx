import React from 'react';

import ReactDom from 'react-dom';

const user={
	name:'jason',
	age:23,
	Address:'New york'
}

function getGreeting(user){
	if(user){
		return <span tabIndex="7">hello, {user.name}</span>
	}else{
		return <span>Hello ,Stranger</span>
	}
}

ReactDom.render(
    getGreeting(user),
     document.getElementById('greet')
	)