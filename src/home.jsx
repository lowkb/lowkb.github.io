import './styles.css'
import { Icon } from './components/Icon'
import { Me } from './components/Informations'

export function Home() {
  return (
    <div className="canvas-wrapper">
      <Icon />
      <div className="info-overlay">
        <Me />
      </div>
    </div>
  )
}
