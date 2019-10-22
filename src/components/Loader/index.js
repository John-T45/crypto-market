import React from 'react';
import RLoader from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200px;
`;
const Loader = () => {
	return (
		<LoaderContainer>
			<RLoader
				type="Bars"
				color="#1058a1"
				height={40}
				width={40}
			/>
		</LoaderContainer>
	)
};

export default Loader;
