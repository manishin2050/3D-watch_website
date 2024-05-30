import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/patek.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.with_uv_Object003_watch_0.geometry}
          material={materials.watch}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hand_1_watch_0.geometry}
          material={materials.watch}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_watch_0.geometry}
          material={materials.watch}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001_glass_0.geometry}
          material={materials.glass}
          position={[0, 0, 42.926]}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object002_watch_0.geometry}
          material={materials.watch}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object003_watch_0.geometry}
          material={materials.watch}
          rotation={[-Math.PI / 2, 0, .7]}
          scale={2.54}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/patek.glb')