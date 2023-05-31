import styled from 'styled-components'

export default function Section( { children, flexRow } ) {
	return <Wrapper flexRow={ flexRow }>{ children }</Wrapper>
}

const Wrapper = styled.section`
	display: ${ ( props ) => ( props.flexRow ? 'flex' : 'block' ) };
	padding-bottom: 40px;
	padding-top: 40px;
	box-shadow: 0px 1px 4px -4px rgba( 0, 0, 0, 0.25 );
	border-bottom: 7px solid var( --color-gray-100 );
`
