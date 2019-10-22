import React from 'react';
import styled, {css} from 'styled-components/macro';
import PropTypes from 'prop-types';
import ResponsiveImage from '../ResponsiveImage';
import {Link} from '@reach/router';

// CurrencyTile styles
const CurrencyTileStyled = styled.div`
	background-color: ${({theme}) => theme.colors.white};
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.8rem;
	padding: 1.6rem 1.6rem 1.4rem;
	width: 100%;
`;

const CurrencyNameWrap = styled.div`
	display: inline-block;
	margin-left: 1rem;
`;
const CurrencyName = styled(Link)`
	color: ${({theme}) => theme.colors.black};
	font-size: ${({theme}) => theme.fontSizes[1]};
	font-weight: ${({theme}) => theme.fontWeights.medium};
	line-height: 1.31;
	margin-bottom: 0.4rem;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;
const CurrencyPair = styled.div`
	color: ${({theme}) => theme.colors.slateGray};
	display: none;
	font-size: ${({theme}) => theme.fontSizes[0]};
	${({theme}) => css`
		${theme.mediaQueries.sm} {
			display: block;
		}
	`}
`;
const CurrencyPrice = styled.div`
	color: ${({theme}) => theme.colors.black};
	font-size: ${({theme}) => theme.fontSizes[1]};
`;

// CurrencyTile component
const CurrencyTile = (
	{image, currencyName, currencyPair, currencyPrice, routeParam}) => {
	return (
		<CurrencyTileStyled>
			<div>
				<ResponsiveImage
					display="inline-block"
					size={20}
					pr={10}
					src1x={image.src1x}
					src2x={image.src2x}
					css={css`
						vertical-align: middle;
						${({theme}) => css`
							${theme.mediaQueries.sm} {
								vertical-align: top;
							}
						`}}
`					}
				/>
				<CurrencyNameWrap>
					<CurrencyName to={`/history/${routeParam}`}>{currencyName}</CurrencyName>
					<CurrencyPair>{currencyPair}</CurrencyPair>
				</CurrencyNameWrap>
			</div>
			<CurrencyPrice>{currencyPrice}</CurrencyPrice>
		</CurrencyTileStyled>
	)
};

CurrencyTile.protoTypes = {
	currencyName: PropTypes.string,
	currencyPair: PropTypes.string,
	currencyPrice: PropTypes.string,
	routeParam: PropTypes.string,
	image: PropTypes.shape({
		src1x: PropTypes.string,
		src2x: PropTypes.string,
	})
};

export default CurrencyTile;
