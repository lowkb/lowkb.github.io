import { render } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { Home } from './home.jsx'
import { Loader } from './components/Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false)
      return
    }

    const onLoad = () => setLoading(false)
    window.addEventListener('load', onLoad)

    return () => window.removeEventListener('load', onLoad)
  }, [])

  return loading ? <Loader /> : <Home />
}

render(<App />, document.getElementById('home'))
