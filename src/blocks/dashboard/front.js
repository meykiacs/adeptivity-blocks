import { BrowserRouter } from "react-router-dom"
import { PhpProvider } from "./PhpContext"
import App from "./src/App"
import { render } from "@wordpress/element"
import { createGlobalStyle } from "styled-components"

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root")
	const assetDir = root.dataset.assetdir

	const GlobalStyles = createGlobalStyle`

	/* latin-ext */
	@font-face {
		font-family: 'Open Sans';
		font-style: italic;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWV4ewJER.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: italic;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVAewA.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 300;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 300;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	/* latin-ext */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2');
		unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	/* latin */
	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-stretch: 100%;
		font-display: swap;
		src: url(${assetDir}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}


	:root {
		--font-weight-bold-700: 700;
		--font-weight-bold-600: 600;
		--font-weight-medium: 400;
		--font-weight-light: 350;
		--font-weight-lighter: 200;

		--font-family: "Open Sans", sans-serif;
		--font-family-mono: "Open Sans", sans-serif;
		--font-family-spicy: "Open Sans", sans-serif;
		--font-family-calligraphic: "Open Sans", sans-serif;

		--color-text: #202224;
		--color-background: #FFF;
		--color-blurred-background: rgba(0,0,0,0.8);
		--color-primary: #03BA6D;
		--color-secondary: #0A4029;
		--color-tertiary: rgba(122, 199, 152,0.9);
		--color-decorative: rgba(143, 216, 181, 0.9);
		--color-muted: #FFF;
		--color-info: #FFF;
		--color-error: #f95428;
		--color-error-background: #FFF;
		--color-success: #FFF;
		--color-success-background: #FFF;
		--color-warning: #FFF;
		--color-warning-background: #FFF;
		--color-gray-100: #f5f5f5;
		--color-gray-200: #f2f2f2;
		--color-gray-300: #e2e6ea;
		--color-gray-500: #a6a6a6;
		--color-gray-600: rgba(36, 38, 52, 0.5);
		--color-gray-700: #202224;
		--color-gray-800: rgba(245, 245, 245, 0.25);
		--color-gray-900: #5a5a5a;
		--color-gray-1000: #e2e2e2;
		
		--color-white: #fff;
		--color-black: #000;
		
		--color-divergent: #8F96EB;
		--color-lateral: #FFCC00;
		--color-aesthetic: #44c7f3;
		--color-system: #e9964a;
		--color-inspirational: #c83737;
		;



		--syntax-bool: #FFF;
		--syntax-val: #FFF;
		--syntax-str: #FFF;
		--syntax-name: #FFF;
		--syntax-del: #FFF;
		--syntax-regex: #FFF;
		--syntax-fn: #FFF;
		
		--gradient-golden: #FFF;
	}


	/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		height: 100%;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	a {
		text-decoration: none;
		color: var(--color-text);
	}

	/* GLOBAL STYLES */

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		line-height: 1.45;	
	}

	html {
		font-size: 62.5%;
	}

	body {
		color: var(--color-text);
		background-color: var(--color-background);
	}

	a:focus {
		outline: 5px auto var(--color-primary);
	}


	body, input, button, select, option {
		font-family: var(--font-family);
		font-weight: var(--font-weight-medium);
	}

	/* 
	h1, h2, h3, h4, h5, h6 {
		font-weight: var(--font-weight-bold-600);
	} */

	h1, h2, h3, h4, h5, h6, p {
		text-rendering: optimizeLegibility;
	}

	/* p {
		margin-bottom: 1.5em;
		font-size: 1.8rem;
	} 
	*/

	em {
		font-style: italic;
	}

	strong {
		font-weight: var(--font-weight-bold-600);
	}


	::selection {
		background-color: var(--color-primary);
		color: #FFF;
	}

	@media (orientation: landscape) {
		::-webkit-scrollbar {
			width: 9px;
			height: 11px;
			background-color: transparent;
		}

		::-webkit-scrollbar-track {
			border-radius: 3px;
			background-color: transparent;
		}

		::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: var(--color-gray-300);
			background-color: 2px solid var(--color-background);
		}
	}
`

	render(
		<BrowserRouter>
			<PhpProvider>
				<App />
				<GlobalStyles />
			</PhpProvider>
		</BrowserRouter>,
		root
	)
})
