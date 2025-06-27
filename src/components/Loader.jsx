import { useEffect, useState } from 'preact/hooks'

export function Loader() {
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader">
      <span className="loader-text">
        {'> loading' + '.'.repeat(dots)}
      </span>
    </div>
  )
}
