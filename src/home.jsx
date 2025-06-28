import './styles.css'
import { Icon } from './components/Icon'
import { Me } from './components/Informations'
import { Background } from './components/Background'

export function Home() {
  return (
    <>
      <Background />
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
