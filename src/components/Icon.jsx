import { useEffect, useRef } from 'preact/hooks'
import * as THREE from 'three'
import { ASCIIEffect } from 'three/examples/jsm/effects/ASCIIEffect'

export function Icon() {
  const mountRef = useRef()

  useEffect(() => {
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)

    const effect = new ASCIIEffect(renderer, ' .:-+*=%@#', { invert: true })
    effect.setSize(width, height)

    const container = effect.domElement
    container.style.color = '#00ff90'
    container.style.backgroundColor = 'transparent'
    container.style.fontFamily = 'monospace'
    container.style.whiteSpace = 'pre'
    container.style.lineHeight = '1em'
    container.style.position = 'absolute'
    container.style.top = '0'
    container.style.left = '0'
    container.style.zIndex = '1'

    mountRef.current.appendChild(container)

    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff90 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      effect.render(scene, camera)
    }

    animate()

    return () => {
      if (mountRef.current.contains(container)) {
        mountRef.current.removeChild(container)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1
      }}
    />
  )
}
