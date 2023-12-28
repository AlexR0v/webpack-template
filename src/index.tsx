import { createRoot } from 'react-dom/client'
import App            from './app/App'

const root = document.getElementById('root')
const container = createRoot(root)

console.log('5')

container.render(<App />)
