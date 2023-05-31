import { tools } from '../data'
import ToolCard from './ToolCard'

export default function ToolList() {
	return (
		<>
			{ tools.map( ( tool ) => (
				<ToolCard key={ tool.id } { ...tool } />
			) ) }
		</>
	)
}
