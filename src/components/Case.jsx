import React, { useRef } from "react";
import {
  useGLTF,
  useCursor,
  useTexture,
  Text,
  Decal,
  Environment,
  OrbitControls,
  RenderTexture,
  RandomizedLight,
  PerspectiveCamera,
  AccumulativeShadows,
  Dodecahedron,
} from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../context/Customization";

import { useSnapshot } from "valtio";

import state from "../store";

function Case(props) {
  const textRef = useRef();

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
          {/* {snap.isLogoTexture && ( */}
          {/* EXPERIMENTAL SETTINGS FOR MODEL */}
          {/* <Decal position={[0, 0, 0]} rotation={[0.5, 0, 0.5]} scale={0.15}> */}
            <Text color="black" >
              hello world!
            </Text>
          {/* </Decal> */}
        </mesh>
      </group>
    </group>
  );
}

export default Case;

useGLTF.preload("./models/case.gltf");
