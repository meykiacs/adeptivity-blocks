import { bars } from '../data'

import styled from 'styled-components'
import ProgressList from './ProgressList'
import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import usePhp from '../../usePhp'

export default function Progress() {
	const assetDir = usePhp()
	const [ totalScore, setTotalScore ] = useState( 0 )
	const [ maxScore, setMaxScore ] = useState( 1 )
	const score28 = Math.floor( ( totalScore * 28 ) / ( maxScore + 1 ) ) + 1
	const postfix = score28 > 9 ? +score28 : '0' + score28
	const growthPath = assetDir + 'img/growth' + postfix + '.png'
	return (
		<Section>
			{ /* <Title>My Crativity Growth</Title> */ }

			<SectionHeader title="My Crativity Growth" />
			<Wrapper>
				<ChartWrapper>
					<ProgressList
						bars={ bars }
						setTotalScore={ setTotalScore }
						setMaxScore={ setMaxScore }
					/>
				</ChartWrapper>
				<ScoreWrapper>
					<img src={ growthPath } alt="growth" />
					<Score>
						{ totalScore }/{ maxScore }
					</Score>
				</ScoreWrapper>
			</Wrapper>
		</Section>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
`

const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	gap: 20px;
	flex-grow: 1;
	/* flex-basis: 735px; */
`

const ScoreWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 1px;
	margin-bottom: 10px;
`

const Score = styled.div`
	text-align: center;
	width: 200px;
	margin-left: auto;
	margin-right: auto;
	height: 23px;
	color: var( --color-gray-500 );
	background-color: var( --color-gray-100 );
	font-size: 1.5rem;
	border-radius: 67px;
`
