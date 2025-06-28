import './styles.css'
import { Icon } from './components/Icon'
import { Me } from './components/Informations'
import { MatrixBackground } from './components/MatrixBackground'

export function Home() {
  return (
    <>
      <MatrixBackground />
      <div className="container">
        <img src="/avatar.png" className="avatar" />
        <div className="main">
          <Icon />
          <div className="informations">
            <Me />
          </div>
        </div>
      </div>
    </>
  )
}
