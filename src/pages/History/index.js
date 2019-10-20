import React from 'react';
import PropTypes from 'prop-types';

const HistoryPage = ({currencyPair}) => {
    return <div>{currencyPair}</div>;
};

HistoryPage.propTypes = {
    currencyPair: PropTypes.string
};

export default HistoryPage;
