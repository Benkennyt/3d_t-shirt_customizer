import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import { useSnapshot } from 'valtio';
import state from '../store';

const CanvasModel = () => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov:25 /*fov: snap.intro ? 10 :  25*/ }}
      gl={{preserveDrawingBuffer: true}}
      className='w-full max-w-full h-full transiton-all ease-in'
    >
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

       <CameraRig>
          {/* <Backdrop/>  */}
          <Center>
            <Shirt/>
          </Center>
       </CameraRig> 
    </Canvas>
  )
}

export default CanvasModel