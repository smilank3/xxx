
import x from './home.js'


function addAll(){
	return Array.from(arguments).reduce((a,b)=>a+b)
}

console.log(...[1,2,3])

console.log(addAll(1,3,2))
