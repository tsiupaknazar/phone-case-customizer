/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/case.gltf
Author: 3Dshim (https://sketchfab.com/gokorvlad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/free-iphone-case-a338ffb4785b4f2b814785c372ba016d
Title: Free Iphone Case
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Case(props) {
  const { nodes, materials } = useGLTF('/case.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.007']} />
      </group>
    </group>
  )
}

export default Case;

useGLTF.preload('/case.gltf')
