import { useEffect, useState } from 'preact/hooks'

export function Loader() {
  const totalSteps = 10
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d + 1) % 4)
      setProgress((p) => Math.min(p + 1, totalSteps))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const bar = '[' + '#'.repeat(progress) + ' '.repeat(totalSteps - progress) + ']'

  return (
    <div className="loader">
      <div className="loader-box">
        <div className="loader-text">{'> loading low_kb shell' + '.'.repeat(dots)}</div>
        <div className="loader-bar">{bar}</div>
      </div>
    </div>
  )
}
