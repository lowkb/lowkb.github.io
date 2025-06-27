import './styles.css'
import { Icon } from './components/Icon'
import { Info } from './components/Informations'

export function Home() {
  return (
    <div className="app">
      <div className="left">
        <Icon />
      </div>
      <div className="right">
        <Info />
      </div>
    </div>
  )
}
