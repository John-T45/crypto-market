import mockAxios from 'axios';
import {getCoins, getCoinHistory} from '../index';
import coinsData from './coinsData';
import filterdCoinsData from './filteredCoinData';
import historyData from './historyData';
import historyFilteredData from './filteredHistoryData';

describe('API', () => {
	describe("getCoins()", () => {
		it("fetches coins from coinjar and return filtered data", async () => {
			mockAxios.get.mockImplementationOnce(() =>
				Promise.resolve({
					data: coinsData
				})
			);

			let filteredData;
			await getCoins((data) => {
				filteredData = data;
			});

			expect(filteredData).toEqual(filterdCoinsData);
			expect(mockAxios.get).toHaveBeenCalledTimes(1);
			expect(mockAxios.get).toHaveBeenCalledWith("https://api.coinjar.com/v3/exchange_rates");
		})
	});

	describe("getCoinHistory()", () => {
		it("fetches coins from coinjar and return filtered data", async () => {
			mockAxios.request.mockImplementationOnce(() =>
				Promise.resolve({
					data: historyData
				})
			);

			let filteredData;
			await getCoinHistory('BTCAUD', (data) => {
				filteredData = data;
			});

			expect(filteredData).toEqual(historyFilteredData);
			expect(mockAxios.get).toHaveBeenCalledTimes(1);
		})
	});
});
