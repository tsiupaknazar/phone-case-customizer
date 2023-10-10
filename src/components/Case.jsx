import React, { useRef } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../context/Customization";

import { useSnapshot } from "valtio";

import state from "../store";

function Case(props) {
  const { nodes, materials } = useGLTF("./models/case.gltf");
  const { caseColor, caseImage } = useCustomization(); // Add caseImage from context

  const snap = useSnapshot(state);
  const logoTexture = useTexture(snap.logoDecal);
  const stateString = JSON.stringify(snap);
  return (
    <group key={stateString}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* Create a decal by using a transparent texture */}
        <mesh
          castShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.006"]}
          material-roughness={1}
          dispose={null}
        >
          <meshStandardMaterial color={snap.color} />
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.007"]}
        >
          <meshStandardMaterial color={snap.color} />
          {/* {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )} */}
        </mesh>
      </group>
    </group>
  );
}

export default Case;

useGLTF.preload("./models/case.gltf");
