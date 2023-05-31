import { PhpProvider } from './PhpContext'
import App from './src/App'
import ReactDOM from 'react-dom'

window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')
	ReactDOM.render(
		<PhpProvider>
			<App />
		</PhpProvider>, root)
})
