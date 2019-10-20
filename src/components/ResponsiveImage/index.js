import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import {display, size, width, height, compose} from 'styled-system';
import {propType} from '@styled-system/prop-types';

// ResponsiveImage styles
const ImageStyled = styled.img`
	max-width: 100%;
	height: auto;
	${compose(display, size, width, height)}
`;

// ResponsiveImage component
const ResponsiveImage = ({src1x, src2x, ...props}) => (
	<ImageStyled
		src={src1x}
		srcSet={`${src1x} 1x, ${src2x} 2x`}
		{...props}
	/>
);

// ResponsiveImage prop types
ResponsiveImage.propTypes = {
	src1x: PropTypes.string,
	src2x: PropTypes.string,
	display: propType,
	size: propType,
	width: propType,
	height: propType,
};

export default ResponsiveImage;
