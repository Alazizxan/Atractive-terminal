// extend({ MeshLineGeometry, MeshLineMaterial });

// useGLTF.preload('./models/model2.glb');
// useTexture.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg');


// const PhysicsIDCard = () => {
//   return (
    // <Canvas camera={{ position: [0, 0, 13], fov: 25 }} className="w-full h-full">
    //   <ambientLight intensity={Math.PI} />
    //   <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
    //     <Band />
    //   </Physics>
    //   <Environment background blur={0.75}>
    //     <color attach="background" args={['black']} />
    //     <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
    //     <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
    //     <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
    //     <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
    //   </Environment>
    // </Canvas>
//   );
// };

// function Band({ maxSpeed = 50, minSpeed = 10 }) {
//   const band = useRef<any>(), fixed = useRef<any>(), j1 = useRef<any>(), j2 = useRef<any>(), j3 = useRef<any>(), card = useRef<any>();
//   const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
//   const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 };
//   const { nodes, materials } = useGLTF('/models/model2.glb');
//   const texture = useTexture('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg');
//   const { width, height } = useThree((state) => state.size);
//   const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
//   const [dragged, drag] = useState<any>(false);
//   const [hovered, hover] = useState(false);

//   useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
//   useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
//   useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]);

//   useEffect(() => {
//     if (hovered) {
//       document.body.style.cursor = dragged ? 'grabbing' : 'grab';
//       return () => void (document.body.style.cursor = 'auto');
//     }
//   }, [hovered, dragged]);

//   useFrame((state, delta) => {
//     if (dragged) {
//       vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
//       dir.copy(vec).sub(state.camera.position).normalize();
//       vec.add(dir.multiplyScalar(state.camera.position.length()));
//       [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
//       card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
//     }
//     if (fixed.current) {
//       [j1, j2].forEach((ref) => {
//         if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
//         const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
//         ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
//       });

//       curve.points[0].copy(j3.current.translation());
//       curve.points[1].copy(j2.current.lerped);
//       curve.points[2].copy(j1.current.lerped);
//       curve.points[3].copy(fixed.current.translation());
//       band.current.geometry.setPoints(curve.getPoints(32));

//       ang.copy(card.current.angvel());
//       rot.copy(card.current.rotation());
//       card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
//     }
//   });

//   curve.curveType = 'chordal';
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

//   return (
//     <>
//       <group position={[0, 4, 0]}>
//         <RigidBody ref={fixed} {...segmentProps} type="fixed" />
//         <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
//           <BallCollider args={[0.1]} />
//         </RigidBody>
//         <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
//           <CuboidCollider args={[0.8, 1.125, 0.01]} />
//           <group
//             scale={2.25}
//             position={[0, -1.2, -0.05]}
//             onPointerOver={() => hover(true)}
//             onPointerOut={() => hover(false)}
//             onPointerUp={(e: any) => {
//               e.target.releasePointerCapture(e.pointerId);
//               drag(false);
//             }}
//             onPointerDown={(e: any) => {
//               e.target.setPointerCapture(e.pointerId);
//               drag(
//                 new THREE.Vector3()
//                   .copy(e.point)
//                   .sub(vec.copy(card.current.translation()))
//               );
//             }}>
//             <mesh geometry={nodes.card.geometry}>
//               <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
//             </mesh>
//             <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
//             <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
//           </group>
//         </RigidBody>
//       </group>
//       <mesh ref={band}>
//         <meshLineGeometry />
//         <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
//       </mesh>
//     </>
//   );
// }

// const RealisticTerminal = () => {
//   const [history, setHistory] = useState<Array<{ type: 'command' | 'output', content: string }>>([
//     { type: 'output', content: 'Welcome to AZIZKHON\'s Portfolio Terminal\nType "help" to see available commands.' }
//   ]);
//   const [currentInput, setCurrentInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history, currentInput]);

//   useEffect(() => {
//     if (inputRef.current && !isTyping) {
//       inputRef.current.focus();
//     }
//   }, [isTyping, history]);

//   const typeWriter = (text: string) => {
//     setIsTyping(true);
//     let index = 0;
//     const typingSound = new Audio("/typing.mp3");
//     typingSound.volume = 0.3;

//     setHistory(prev => [...prev, { type: 'output', content: '' }]);

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setHistory(prev => {
//           const newHistory = [...prev];
//           const lastItem = newHistory[newHistory.length - 1];
//           if (lastItem && lastItem.type === 'output') {
//             lastItem.content = text.substring(0, index + 1);
//           }
//           return newHistory;
//         });
//         typingSound.currentTime = 0;
//         typingSound.play();
//         index++;
//       } else {
//         clearInterval(interval);
//         setIsTyping(false);
//       }
//     }, 6);
//   };

//   const handleCommand = (cmd: string) => {
//     const command = cmd.toLowerCase().trim();
//     setHistory(prev => [...prev, { type: 'command', content: `alazizxan@portfolio:~$ ${cmd}` }]);

//     if (command === 'clear') {
//       setTimeout(() => {
//         setHistory([
//           { type: 'output', content: 'Welcome to AL AZIZKHON\'s Portfolio Terminal\nType "help" to see available commands.' }
//         ]);
//       }, 100);
//       return;
//     }

//     if (commands[command as keyof typeof commands]) {
//       const output = commands[command as keyof typeof commands].output;
//       typeWriter(output);
//     } else if (command) {
//       const output = `bash: ${command}: command not found\nType 'help' to see available commands.`;
//       typeWriter(output);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !isTyping && currentInput.trim()) {
//       handleCommand(currentInput);
//       setCurrentInput('');
//     }
//   };

//   const handleClick = () => {
//     if (inputRef.current && !isTyping) inputRef.current.focus();
//   };

//   return (
//     <div
//       className="h-full bg-black p-6 font-mono text-green-400 overflow-hidden flex flex-col relative"
//       onClick={handleClick}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4 border-b border-green-900/50 pb-3">
//         <div>
//           <h1 className="text-1xl font-bold text-green-400 tracking-wide">AL AZIZKHON</h1>
//           <p className="text-green-300 text-[0.7rem] opacity-80">AI/ML Engineer | Full Stack Developer | Cybersecurity Expert</p>
//         </div>
//         <div className=" ml-[10rem] text-green-300 text-xs font-mono opacity-70">
//           {new Date().toLocaleString('en-US', {
//             month: 'short', day: 'numeric', year: 'numeric',
//             hour: '2-digit', minute: '2-digit', second: '2-digit'
//           })}
//         </div>
//       </div>

//       {/* Command shortcuts */}
//       <div className="flex flex-wrap gap-2 mb-4 text-[0.6rem] border border-green-900/50 rounded-lg p-2 bg-green-950/10">
//         {Object.keys(commands).map((cmd, index) => (
//           <button
//             key={cmd}
//             onClick={() => !isTyping && handleCommand(cmd)}
//             className="text-green-400 hover:text-green-200 transition-colors px-2 py-1 rounded hover:bg-green-900/30"
//             disabled={isTyping}
//           >
//             {cmd}
//           </button>
//         ))}
//       </div>

//       {/* Terminal output */}
//       <div
//         ref={terminalRef}
//         className="flex-1 overflow-y-auto mb-2 space-y-2 text-[0.6rem] leading-relaxed scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900 pr-2"
//       >
//         {history.map((item, index) => (
//           <div
//             key={index}
//             className={`whitespace-pre-wrap break-words ${
//               item.type === 'command'
//                 ? 'text-green-400 font-semibold'
//                 : 'text-green-300'
//             }`}
//           >
//             {item.content}
//           </div>
//         ))}

//         {/* Active command line */}
//         {!isTyping && (
//           <div className="flex items-center mt-3">
//             <span className="text-green-400 font-bold">alazizxan@portfolio:~$</span>
//             <input
//               ref={inputRef}
//               type="text"
//               value={currentInput}
//               onChange={(e) => setCurrentInput(e.target.value)}
//               onKeyPress={handleKeyPress}
//               className="ml-2 w-full bg-transparent border-none outline-none text-green-400 font-mono caret-green-400 text-sm"
//               autoComplete="off"
//               spellCheck="false"
//             />
//           </div>
//         )}
//       </div>

//       {/* CRT effect overlay */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
//         <div
//           className="w-full h-full"
//           style={{
//             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,0,0.15) 2px)',
//           }}
//         />
//       </div>
//     </div>
//   );
// };