// constants.js
const BREAKPOINTS = {
	mobileMax: 600,
	tabletMax: 900,
	laptopMax: 1300,
}
export const QUERIES = {
	phoneAndSmaller: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
	tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
	laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}
