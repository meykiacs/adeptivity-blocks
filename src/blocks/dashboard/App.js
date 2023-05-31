import App from './src/App'
import ReactDOM from 'react-dom'

window.addEventListener( 'DOMContentLoaded', () => {
	const root = document.getElementById( 'root' )
	const imageDir = root.dataset.imagedir
	ReactDOM.render( <App imageDir={imageDir} />, root )
} )
