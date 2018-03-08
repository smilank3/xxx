import React from 'react';
import ReactDom from 'react-dom';

function formatName(user){
	return user.firstName+'   '+user.lastName;
}

const user={
	firstName:'jannat',
	lastName:'jahhan'
};

var bio=formatName(user);
console.log(bio);

const element=(
		<span>
		Hello, {formatName(user)}
		</span>
	);

ReactDom.render(
		element,
		document.getElementById('hello')
	);

