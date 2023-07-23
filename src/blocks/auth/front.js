import { render } from "react-dom"
import Auth from "./Auth"
import { createGlobalStyle } from "styled-components"

window.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("adeptivity-auth")
	const fontUrl = root.dataset.fontUrl
	const providedValues = {
		homeUrl : root.dataset.homeUrl,
		lostPasswordNonce : root.dataset.lostpasswordNonce,
		loginNonce : root.dataset.loginNonce,
		rpNonce : root.dataset.rpnonce,
		info : root.dataset.info,
		mode : root.dataset.mode,
		authErrors: JSON.parse(
			document.getElementById("auth_errors").innerHTML
		),


	}

	const GlobalStyles = createGlobalStyle`

	@font-face {
		font-family: 'Open Sans';
		font-style: italic;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${fontUrl}fonts/open-sans/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkWVAewA.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 300;
		font-stretch: 100%;
		font-display: swap;
		src: url(${fontUrl}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-stretch: 100%;
		font-display: swap;
		src: url(${fontUrl}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-stretch: 100%;
		font-display: swap;
		src: url(${fontUrl}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-stretch: 100%;
		font-display: swap;
		src: url(${fontUrl}fonts/open-sans/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}



/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

body {
	line-height: 1;
	height: 100%;
	font-family: 'Open Sans', serif;
	color: var(--color-text);
}

ol,
ul {
	list-style: none;
}

blockquote,
q {
	quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
	content: "";
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*::before,
*::after {
	box-sizing: border-box;
	line-height: 1.5;
	font-family: "Open Sans", serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: auto;
}

#adeptivity-auth {

	/*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
	isolation: isolate;
}

html {
	--color-white: hsl(0deg 0% 95%);
	--color-black: black;
	
	--color-primary: hsl(152deg 100% 56%);
	--color-secondary: hsl(215deg 65% 47%);
	--color-secondary-dark: hsl(218deg 80% 23%);
	
	--color-accent: hsl(13deg 95% 57%);
	--color-text: hsl(240deg 6% 13%);
	
	--color-gray-100: hsl(185deg 5% 95%);
	--color-gray-300: hsl(190deg 5% 80%);
	--color-gray-500: hsl(196deg 4% 60%);
	--color-gray-700: hsl(220deg 5% 40%);
	--color-gray-900: hsl(220deg 3% 20%);

	--color-backdrop: hsl(var(--color-gray-700) / 0.8);

	--font-weight-bold: 700;
	--font-weight-normal: 400;

	font-size: 62.5%;
}

a {
	text-decoration: none;
}

a:focus {
	outline: 5px auto var(--color-primary);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	text-rendering: optimizelegibility;
}

em {
	font-style: italic;
}

strong {
	font-weight: 700;
}

::selection {
	background-color: var(--color-primary);
	color: #fff;
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

@media (pointer: coarse) {

	html {
		--min-tap-height: 44px;
	}
}
`
	render(
		<>
			<Auth providedValues={providedValues} />
			<GlobalStyles />
		</>,
		root
	)
})
