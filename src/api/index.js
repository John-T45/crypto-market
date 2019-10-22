import axios from 'axios';
import {formatPrice, formatCurrency, formatTime} from '../utils';
import {constants} from '../constants';

const TRADES_ENDPOINT = "https://api.coinjar.com/v3/exchange_rates";
const allowedBaseCoins = new Set(['BTC', 'LTC', 'ETH', 'XRP', 'ZEC']);

function filterCoins(data) {
	let filteredData = [];
	for(let i in data) {
		const item = data[i];
		const {counter_currency: cc, base_currency: bc} = item;
		if(cc === 'AUD' && allowedBaseCoins.has(bc)) {
			filteredData.push({
				...constants[bc],
				currencyPair: `${bc}/${cc}`,
				routeParam: `${bc}${cc}`,
				currencyPrice: formatCurrency(formatPrice(item.midpoint)),
			});
		}
	}
	return filteredData;
}

function filterHistoryPrices(data) {
	let filteredData = [];
	for(let i in data) {
		const item = data[i];
		filteredData.push({
			price: formatPrice(item.price),
			timestamp: formatTime(item.timestamp),
			taker_side: item.taker_side,
			size: formatPrice(item.size)
		});
	}
	return filteredData;
}

export const getCoins = (onSuccess) => {
	axios.get(TRADES_ENDPOINT)
		.then(response => {
			const data = response.data.exchange_rates;
			const filteredData = filterCoins(data);
			onSuccess(filteredData);
		})
		.catch(error => {
			throw new Error(error.message);
		});
};

export const getCoinHistory = (currencyPair, onSuccess) => {
	const endpoint = `https://data.exchange.coinjar.com/products/${currencyPair}/trades`;
	axios.request({
		method: 'GET',
		url: endpoint,
		params: {
			limit: 20
		}
	})
		.then(response => {
			const data = response.data;
			const filteredData = filterHistoryPrices(data);
			onSuccess(filteredData);
		})
		.catch(error => {
			throw new Error(error.message);
		});
};
