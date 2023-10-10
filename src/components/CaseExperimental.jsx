import React, { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

export function CaseExperimental(props) {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("./models/case-transformed.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) =>
    easing.dampC(materials["Material.006"].color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  // const newColor = 0xff0000;
  // // Change the material color
  // materials["Material.006"].color.set(newColor);
  return (
    <>
      <group {...props} dispose={null} key={stateString}>
        <mesh
          castShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.006"]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={5}
              map={fullTexture}
            />
          )}
          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/case-transformed.glb");
