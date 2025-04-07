import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Scene from '../components/Scene';

export default function Home() {
  return (
    <div className="container">
      <header>
        <img src="/logo.png" alt="Mailmind" className="logo" />
        <h1>Mailmind</h1>
        <p>AI Email Assistant for Busy Entrepreneurs</p>
        <button className="cta">Get Chrome Extension</button>
      </header>

      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
        <OrbitControls enableZoom={false} />
        <Html center>
          <div className="hint">Drag to rotate 3D model</div>
        </Html>
      </Canvas>

      <section className="features">
        <div className="card">
          <h3>📁 Auto-Sort Emails</h3>
          <p>AI learns your priorities automatically</p>
        </div>
        <div className="card">
          <h3>✨ Clean Inbox</h3>
          <p>Only see what matters</p>
        </div>
      </section>
    </div>
  );
}
