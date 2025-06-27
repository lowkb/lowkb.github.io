import { useEffect, useRef } from 'preact/hooks'
import * as THREE from 'three'

export function Icon() {
  const mountRef = useRef()

  useEffect(() => {
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff90 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div style={{ width: '100%', height: '100%' }} ref={mountRef} />
}
