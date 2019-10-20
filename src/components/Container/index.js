import React from 'react';
import styled from 'styled-components';

// Container styles
const ContainerStyled = styled.div`
	display: block;
	margin: 0 auto;
	max-width: ${({theme}) => theme.maxContainerWidth};
	padding: 0;
	width: 100%;
`;

// Container component
const Container = ({children, ...props}) => (
    <ContainerStyled {...props}>
        {children}
    </ContainerStyled>
);

export default Container;
