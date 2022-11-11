import { ContactShadows, Float, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import './App.css';
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';


function Watch(props) {
  
  const myMesh = useRef();
  
  useFrame(() => {
    const a = window.pageYOffset / 500
    myMesh.current.rotation.y = a;
  });
  const { nodes, materials } = useGLTF('watch/vintage_pocket_watch_4k.gltf')
  return (
    <group {...props} dispose={null} scale={50}  ref={myMesh}>
      <mesh geometry={nodes.Circle001.geometry} material={materials.vintage_pocket_watch_glass} />
      <mesh geometry={nodes.Circle001_1.geometry} material={materials.vintage_pocket_watch} />
      <mesh geometry={nodes.Circle001_2.geometry} material={materials.vintage_pocket_watch_hands} />
      <mesh geometry={nodes.vintage_pocket_watch_hour_hand.geometry} material={materials.vintage_pocket_watch_hands} />
      <mesh geometry={nodes.vintage_pocket_watch_minute_hand.geometry} material={materials.vintage_pocket_watch_hands} />
      <mesh geometry={nodes.vintage_pocket_watch_second_hand.geometry} material={materials.vintage_pocket_watch_hands} />
    </group>
  )
}

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshLambertMaterial attach='material' color='black' />
    </mesh>
  )
}

function App() {

  return (
    <div className='!min-h-[100vh] sticky top-0 bg-[#161616]'>
      <Canvas>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotateSpeed={1.1}
          minDistance={4}
          maxDistance={5}
          enablePan={false}
          enableZoom={false}
          mouseButtons={{
            LEFT: '',
            MIDDLE: '',
            RIGHT: ''
          }}
        />
        {/* <Stars /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[50, 50, 50]} intensity={1} />
        <pointLight position={[-30, -30, 20]} intensity={1} />
        <Float speed={1.4} rotationIntensity={1} floatIntensity={1.3}>
          <Watch />
        </Float>
        <ContactShadows position={[0, -1.9, 0]} blur={2} scale={20} far={5} color='#fff' />
        {/* <Plane /> */}
      </Canvas>
    </div>
  );
}

export default App;
