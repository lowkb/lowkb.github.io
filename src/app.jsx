import { render } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Home } from './home.jsx'
import { Loader } from './components/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return loading ? <Loader /> : <Home />
}

render(<App />, document.getElementById('home'))
