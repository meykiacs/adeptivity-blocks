import { PhpProvider } from './PhpContext'
import App from './src/App'
import {render} from '@wordpress/element'

window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')
	render(
		<PhpProvider>
			<App />
		</PhpProvider>, root)
})
