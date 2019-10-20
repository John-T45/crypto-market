import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Header from '../components/Header';

// Main content container,
// off-set main element by header height
const Main = styled.main`
	margin-top: 80px;
`;

// Default App layout
const DefaultLayout = ({headerProps, children}) => {
	return (
		<>
			<Header {...headerProps} />
			<Main id="mainContent">
				{children}
			</Main>
		</>
	)
};

// DefaultLayout prop types
DefaultLayout.propTypes = {
	headerProps: PropTypes.shape(Header.propTypes)
};

/**
 * @component
 */
export default DefaultLayout;
