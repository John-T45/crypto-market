/**
 * Formats number to currency
 * @param x
 * @returns {string}
 */
export function formatCurrency(x) {
	return x > 1 ?
		`$${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
		: `$${x}`;
}

/**
 * Round to 2 decimal places for values between 100 and
 * 999.99 and 4 significant figures for all others.
 * @param num
 * @returns {string}
 */
export function formatPrice(num) {
	const price = Number(num);
	let formatedPrice;
	if(price >= 100 && price <= 999.99) {
		formatedPrice = Number(price.toFixed(2));
	}
	else {
		formatedPrice = Number(price.toPrecision(4));
	}
	return formatCurrency(formatedPrice);
}

/**
 * Split string at the given index and return array
 * @param value
 * @param index
 * @returns {[string, string]}
 */
export function splitValue(value, index) {
	return [value.substring(0, index), value.substring(index)];
}

/**
 * Split string at the given index using a delimiter and return string
 * @param value
 * @param index
 * @param delimiter
 * @returns {string}
 */
export function splitValueWithDelimiter(value, index, delimiter) {
	return `${value.substring(0, index)}${delimiter}${value.substring(index)}`;
}
