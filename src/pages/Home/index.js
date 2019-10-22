import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import DefaultLayout from '../../layouts/default';
import Container from '../../components/Container';
import CurrencyTile from '../../components/CurrencyTile';
import {getCoins} from '../../api';
import Loader from '../../components/Loader';

// Page Heading styles
const PageHeading = styled.h2`
	color: ${({theme}) => theme.colors.matisse};
	font-size: ${({theme}) => theme.fontSizes[2]};
	padding: 2.4rem 1.6rem 1.2rem;
`;

// HomePage component
const HomePage = ({headerProps, pageHeading, ...props}) => {
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		getCoins(setCoins);
	}, []);
    return (
    	<DefaultLayout headerProps={headerProps}>
			<Container>
				<PageHeading>{pageHeading}</PageHeading>
				{coins.length > 0 ? coins.map((coin, idx) => (
					<CurrencyTile
						key={idx}
						{...coin}
					/>
				)) : <Loader/>}
			</Container>
		</DefaultLayout>
	);
};

// HomePage prop types
HomePage.propTypes = {
	headerProps: PropTypes.shape({
		title: PropTypes.string,
	}),
	pageHeading: PropTypes.string,
};

// HomePage default prop values
HomePage.defaultProps = {
	headerProps: {
		title: "Market"
	},
	pageHeading: "Current market prices"
};
export default HomePage;
