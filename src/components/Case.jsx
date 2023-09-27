import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import * as THREE from "three";
import { useCustomization } from "../context/Customization";

function Case(props) {
  const { nodes, materials } = useGLTF('./models/case.gltf')
  const { chairColor } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']}>
          <meshStandardMaterial color={chairColor.color} />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.007']}>
          <meshStandardMaterial color={chairColor.color} />
        </mesh>
      </group>
    </group>
  )
}

export default Case;

useGLTF.preload('./models/case.gltf')
