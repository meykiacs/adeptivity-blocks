import styled, { css } from 'styled-components'

export default function SectionHeader( { title, hasRow, children } ) {
	return (
		<Header hasRow={ hasRow }>
			<Title hasRow={ hasRow }>{ title }</Title>
			{ hasRow && children }
		</Header>
	)
}

const flexVariantHeader = css`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

const flexVariantTitle = css`
	margin-right: 15px;
`

const Header = styled.header`
	padding: 10px 0;
	margin-bottom: 20px;
	${ ( props ) => props.hasRow && flexVariantHeader }
`
const Title = styled.h2`
	font-size: 3.1rem;
	font-weight: var( --font-weight-bold-600 );
	${ ( props ) => props.hasRow && flexVariantTitle }
`
