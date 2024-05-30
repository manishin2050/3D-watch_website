import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/digital_watch.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.5}>
        <group position={[0.1, 0.035, 2.353]} rotation={[-Math.PI / 2, 0, -.7]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Case_Face_0.geometry}
            material={materials.Face}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Case_Case_0.geometry}
            material={materials.Case}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_Glass_0.geometry}
            material={materials.Glass}
            position={[-0.002, -0.006, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Band_Band_0.geometry}
            material={materials.Band}
            position={[-0.002, 0.029, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/digital_watch.glb')