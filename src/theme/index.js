import {buttonSizes} from './buttons';
// App theme

// Colors Palette
// Color name generated using http://chir.ag/projects/name-that-color
const white = '#ffffff';
const whiteLilac = '#f2f3fa';
const slateGray = '#7c8691';
const black = '#000000';
const error = '#cc0000';
const toryBlue = '#1058a1';
const matisse = '#2065aa';
const bodyBg = whiteLilac;
const bodyColor = slateGray;

// Responsive breakpoints and media-queries (mobile first).
const breakpoints = [ '320px', '576px', '768px', '992px', '1200px'];

const fonts = {
	base: 'SF Pro Text',
	heavy: `MarkPro`,
};

const fontWeights = {
	regular: 400,
	medium: 500,
	bold: 700,
	heavy: 900,
};

const headingFontFamily = fonts.heavy;

const fontSizes = [
	'1.4rem', '1.5rem', '1.7rem', '2rem'
];

const bodyText = fontSizes[1];
const headingWeight = fontWeights.bold;
const headingLineHeight = 1.4;

const theme = {
	breakpoints,
	mediaQueries: {
		sm: `@media screen and (min-width: ${breakpoints[0]})`,
		md: `@media screen and (min-width: ${breakpoints[1]})`,
		lg: `@media screen and (min-width: ${breakpoints[2]})`,
		xl: `@media screen and (min-width: ${breakpoints[3]})`,
	},
	colors: {
		white,
		whiteLilac,
		slateGray,
		black,
		toryBlue,
		matisse,
		bodyBg,
		bodyColor,
		error,
	},
	space: [
		0, 4, 8, 10, 12, 14, 16, 20, 24
	],
	fonts,
	fontSizes,
	bodyText,
	fontWeights,
	headingWeight,
	headingLineHeight,
	headingFontFamily,
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	maxContainerWidth: '992px',
	buttonSizes
};

export default theme;
