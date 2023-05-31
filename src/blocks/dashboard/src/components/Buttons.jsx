import styled from 'styled-components'

export default function Button( { content, color, variant } ) {
	color = color ? '--color-' + color : 'primary'
	if ( variant === 'label' ) {
		return <Label>{ content }</Label>
	}
	return (
		<Btn href="#" color={ color }>
			{ content }
		</Btn>
	)
}

const Btn = styled.a`
	border: none;
	display: inline-block;
	border-radius: 7px;
	background-color: var( ${ ( props ) => props.color } );
	box-shadow: 0px 1px 5px rgba( 0, 0, 0, 0.25 );
	padding: 8.5px 10px;
	text-decoration: none;
	color: var( --color-white );
	font-weight: var( --font-weight-bold-600 );
	font-size: 1.5rem;
	line-height: 1;
`

export const Label = styled( Btn )`
	background-color: var( --color-tertiary );
	padding: 3px 7px;
	box-shadow: none;
	color: var( --color-text );
	font-size: 1.1rem;
`
