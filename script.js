function fibonacci(num) {
let a=0;
	let b=1;
	if(num===0){
		return a;
	}
	else if(num===1){
		return b;
	}
	let c=0;
	for(let i=3;i<=num;++i){
	    c=a+b;
		a=b;
		b=c;
	}
	return c;
}

module.exports = fibonacci;
