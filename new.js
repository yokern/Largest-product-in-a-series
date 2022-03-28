function random1000() {
	let str = '';

	for (i = 0; i <= 999; i++) {
		var tal = Math.floor(Math.random() * 10);
		str += tal.toString();
	}

	return str;
}

let thousand = random1000();
console.log(thousand);
