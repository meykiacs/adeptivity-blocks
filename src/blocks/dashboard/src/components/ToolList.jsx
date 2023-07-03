import ToolCard from "./ToolCard"

export default function ToolList({ tools }) {
	return (
		<>
			{tools.map((tool) => (
				<ToolCard key={tool.id} {...tool} />
			))}
		</>
	)
}
