import styled from 'styled-components'
import SVG from 'react-inlinesvg'

import profile from '../svgs/profile.svg'
import search from '../svgs/search.svg'
import pocket from '../svgs/pocket.svg'

export default function TopMenu() {
	return (
		<Wrapper>
			<ul>
				<li>
					<btn>
						<Icon src={ search } />
					</btn>
				</li>
				<li>
					<btn>
						<Icon src={ pocket } />
					</btn>
				</li>
				<li>
					<btn>
						<Icon src={ profile } />
					</btn>
				</li>
			</ul>
		</Wrapper>
	)
}

const Wrapper = styled.nav`
	& ul {
		display: flex;
		justify-content: flex-end;
		gap: 55px;
		align-items: center;
		height: 100%;
	}

	padding-right: 56px;
	background-color: var( --color-gray-900 );
	height: 90px;
`

const Icon = styled( SVG )`
	height: 40px;
	width: 40px;
`
