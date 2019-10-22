import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import {constants} from "../../constants";
import { color, fontWeight, space, compose } from "styled-system";
import ResponsiveImage from "../ResponsiveImage";

const TableHeadRow = styled.div`
	display: flex;
	background-color: ${({theme}) => theme.colors.bodyBg};
	color: ${({theme}) => theme.colors.toryBlue};
	font-size: ${({theme}) => theme.fontSizes[1]};
	font-weight: ${({theme}) => theme.fontWeights.medium};
	justify-content: space-between;
	padding: 2rem 1.6rem 1.2rem;
	width: 100%;
`;

const TableContainer = styled.div`
	background-color: ${({theme}) => theme.colors.white};
	padding: 0 1.6rem;
`;

const TableCellRow = styled.div`
	display: flex;
	border-bottom: 1px solid ${({theme}) => theme.colors.bodyBg};
	justify-content: space-between;
	padding: 1.6rem 0;
	width: 100%;
`;

const Cell = styled.div`
	min-width: 90px;
	display: inline-block;
	text-align: ${({right}) => right ? 'right' : 'left'};
	${compose(color, space, fontWeight)}
`;

const PriceWithTrend = ({takerSide, price}) => {
	if(takerSide === 'buy') {
		return (
			<>
				<ResponsiveImage {...constants.T_UP}/>
				<Cell
					fontWeight={500}
					color="green"
					ml="0.4rem"
				>{price}</Cell>
			</>
		)
	}
	return <>
		<ResponsiveImage {...constants.T_DOWN}/>
		<Cell
			fontWeight={500}
			color="red"
			ml="0.4rem"
		>{price}</Cell>
	</>
};

const HistoryTable = ({priceList}) => {
	return (
		<div>
			<TableHeadRow>
				<div>
					<Cell>Time</Cell>
					<Cell>Price</Cell>
				</div>
				<Cell right>Size</Cell>
			</TableHeadRow>
			<TableContainer>
				{priceList && priceList.length > 0 && priceList.map((i, idx) => (
					<TableCellRow key={idx}>
						<div>
							<Cell>{i.timestamp}</Cell>
							<PriceWithTrend takerSide={i.taker_side} price={i.price}></PriceWithTrend>
						</div>
						<Cell right color="black">{i.size}</Cell>
					</TableCellRow>
				))}
			</TableContainer>
		</div>
	);
};

HistoryTable.propTypes = {
	priceList: PropTypes.arrayOf(PropTypes.shape({
		price: PropTypes.number,
		size: PropTypes.number,
		taker_side: PropTypes.string,
		timestamp: PropTypes.string,
	}))
};
export default HistoryTable;
