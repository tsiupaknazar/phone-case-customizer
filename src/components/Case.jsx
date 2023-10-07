import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../context/Customization";

function Case(props) {
  const { nodes, materials } = useGLTF("./models/case.gltf");
  const { caseColor, caseImage } = useCustomization(); // Add caseImage from context
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Create a decal by using a transparent texture */}
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Material.006"]}
        >
          <meshStandardMaterial color={caseColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.007"]}
        >
          <meshStandardMaterial color={caseColor.color} />
          {caseImage.url && (
            <mesh geometry={nodes.Object_3.geometry}>
              <meshBasicMaterial
                transparent
                map={new THREE.TextureLoader().load(caseImage.url)}
              />
            </mesh>
          )}
        </mesh>
      </group>
    </group>
  );
}

export default Case;

useGLTF.preload("./models/case.gltf");
