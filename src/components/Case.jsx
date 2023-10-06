import React, { useRef } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../context/Customization";

function Case(props) {
  const { nodes, materials } = useGLTF("./models/case.gltf");
  const { caseColor, caseImage } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Create the 3D model parts with their original color */}
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.007"]}
        />

        {/* Add the image as a texture to the 3D model */}
        {caseImage.url && (
          <mesh geometry={nodes.Object_3.geometry}>
            <meshBasicMaterial
              map={new THREE.TextureLoader().load(caseImage.url)}
            />
          </mesh>
        )}
      </group>
    </group>
  );
}

export default Case;

useGLTF.preload("./models/case.gltf");
