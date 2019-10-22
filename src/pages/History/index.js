import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import DefaultLayout from '../../layouts/default';
import {splitValueWithDelimiter} from '../../utils';
import {getCoinHistory} from '../../api';
import HistoryTable from "../../components/HistoryTable";

const getPageTitle = (currencyPair) =>
	`${splitValueWithDelimiter(currencyPair, 3, '/')} Trade History`;

const HistoryPage = ({currencyPair}) => {
	const headerTitle =  getPageTitle(currencyPair);
	const [historyData, setHistoryData] = useState([]);
	useEffect(() => {
		getCoinHistory(currencyPair, setHistoryData);
	}, [currencyPair]);

    return <DefaultLayout headerProps={{title: headerTitle}}>
		<Container>
			<HistoryTable priceList={historyData}/>
		</Container>
	</DefaultLayout>;
};

HistoryPage.propTypes = {
    currencyPair: PropTypes.string
};

export default HistoryPage;
