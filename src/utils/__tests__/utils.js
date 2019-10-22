import {
	formatCurrency,
	formatPrice,
	formatTime,
	padZero,
	splitValue,
	splitValueWithDelimiter,
} from "../index";

describe('Utilities', () => {

	describe('formatCurrency()', () => {
		it('should format number to currency', () => {
			const currency = formatCurrency(12345);
			expect(currency).toBe("$12,345");
		});
	});

	describe('formatPrice()', () => {
		it('should round to 2 decimal places for values between 100 and 999.99', () => {
			expect(formatPrice(123.3333)).toBe(123.33);
			expect(formatPrice(200.0012)).toBe(200.00);
		});

		it('should round to 4 significant figures for all others', () => {
			expect(formatPrice(8887.61)).toBe(8888);
			expect(formatPrice(0.211100)).toBe(0.2111);
			expect(formatPrice(0.433288)).toBe(0.4333);
		});
	});

	describe('padZero()', () => {
		it('should pad 0 before a single digit number', () => {
			expect(padZero(4)).toBe("04");
		});
	});

	describe('formatTime()', () => {
		it('should format time from timestamp to hr:mn:sc', () => {
			expect(formatTime("2019-10-22T11:25:35.972567Z")).toBe("22:25:35");
		});
	});

	describe('splitValue()', () => {
		it('should split string at the given index and return array', () => {
			expect(splitValue("BTCAUD", 3)).toEqual(["BTC", "AUD"]);
		});
	});

	describe('splitValueWithDelimiter()', () => {
		it('should split string at the given index using a delimiter and return string', () => {
			expect(splitValueWithDelimiter("BTCAUD", 3, '/')).toBe("BTC/AUD");
		});
	});
});
