import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

// Header element styles
const HeaderStyled = styled.header`
	align-items: flex-end;
	background-color: ${({theme}) => theme.colors.toryBlue};
	display: flex;
	height: 80px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
`;

// Header title styles
const HeaderTitle = styled.h1`
	display: flex;
    color: ${({theme}) => theme.colors.white};
	font-size: ${({theme}) => theme.fontSizes[3]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
	padding: 1.2rem 0;
	justify-content: center;
	width: 100%;
`;

// Header component
const Header = ({title, ...props}) => {
    return (
        <HeaderStyled {...props}>
            <HeaderTitle>{title}</HeaderTitle>
        </HeaderStyled>
    )
};

// Header proptypes
Header.propTypes = {
    title: PropTypes.string
};

/**
 * @component
 */
export default Header;

