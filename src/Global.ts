import { createGlobalStyle } from 'styled-components';


const GlogalStyle = createGlobalStyle`

	*{
			margin: 0;
			padding:0;
			box-sizing: border-box;
			font-family: roboto, sans-serif;
			font-size: 24px;
		}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
`;

export default GlogalStyle;