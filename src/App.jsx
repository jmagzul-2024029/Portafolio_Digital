import { BrowserRouter } from 'react-router-dom'
import AppRouter from './app/router/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
