import './styles.css'
import { Icon } from './components/Icon'
import { Me } from './components/Informations'

export function Home() {
  return (
    <div className="icon">
      <Icon />
      <div className="info">
        <Me />
      </div>
    </div>
  )
}
