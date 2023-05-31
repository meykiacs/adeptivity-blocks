import styled from 'styled-components'
import Button from './Buttons'

export default function Upload() {
	return (
		<Wrapper>
			<Header>
				<Link href="#">
					Click to browse or drag and drop your files
				</Link>
			</Header>
			<Footer>
				<Button content="Upload" color="error" />
			</Footer>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex-basis: 235px;
	/* min-width: 235px; */
	/* flex: 1; */
	border-radius: 7px;
	box-shadow: 0px 0px 7px rgba( 32, 34, 36, 0.25 );
`

const Header = styled.header`
	background-color: var( --color-gray-200 );
	height: 180px;
	width: 100%;
	display: flex;
	padding: 15px 16px;
`

const Link = styled.a`
	border: dashed 2px var( --color-gray-300 );
	border-radius: 17px;
	font-size: 1.4rem;
	font-weight: var( --font-weight-medium );
	line-height: 1.9;
	color: var( --color-gray-500 );
	text-align: center;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	&:hover: {
		text-decoration: none;
	}
`

const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
`
