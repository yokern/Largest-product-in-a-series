function random1000() {
	let str = '';

	for (i = 0; i <= 999; i++) {
		var tal = Math.floor(Math.random() * 10);
		str += tal.toString();
	}

	return str;
}

let thousand = random1000();

function largestProduct() {
	var str = thousand
	let biggestSoFar = 0;
	let len = str.length;
	for (var i = 0; (i < len); i++) {
		let produkt = 1;
		for (let j = i; j < i + 12; j++) {
			let heltal = parseInt(str[j]);
			produkt = heltal * produkt;
		}
		if (produkt > biggestSoFar) biggestSoFar = produkt;
	}
	console.log(biggestSoFar);
}

largestProduct();
