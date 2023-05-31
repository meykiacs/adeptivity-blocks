import { tools } from '../data'
import ToolCard from './ToolCard'

export default function ToolList({imageDir}) {
	return (
		<>
			{ tools.map( ( tool ) => (
				<ToolCard key={ tool.id } { ...tool } imageDir={imageDir} />
			) ) }
		</>
	)
}
