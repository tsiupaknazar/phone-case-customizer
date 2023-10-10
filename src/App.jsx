import "./App.css";
import { Canvas } from "@react-three/fiber";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";
import { CaseExperimental } from "./components/CaseExperimental";
import { Center, Environment } from "@react-three/drei";
import CameraRig from "./components/CameraRig";

function App() {
  return (
    // <CustomizationProvider>
    //   <div className="App">
    //     <Canvas style={{ background: "#171717" }}>
    //       <ambientLight intensity={1} />
    //       <spotLight
    //         intensity={0.5}
    //         angle={0.1}
    //         penumbra={1}
    //         position={[10, 15, 10]}
    //         castShadow
    //       />
    //       <Experience />
    //     </Canvas>
    //     <Configurator />
    //   </div>
    // </CustomizationProvider>
    <div className="App">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0]}}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Center>
            <CaseExperimental />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
}

export default App;
