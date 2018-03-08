
import x from './home.js'

import jsx from '../jsx/hello.jsx'

// testting
import hello from '../jsx/test.jsx'

//
import test2 from '../jsx/test2.jsx'
function addAll(){
	return Array.from(arguments).reduce((a,b)=>a+b)
}

console.log(...[1,2,3])

console.log(addAll(1,3,2))

