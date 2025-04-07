import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Scene from '../components/Scene';

export default function Home() {
  return (
    <div className="container">
      <header>
        {/* Embedded SVG Logo */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 200 50" 
          className="logo"
          style={{ height: "60px" }}
        >
          <path 
            d="M20 10 L40 10 L40 30 L20 30 Z M45 10 L65 10 L65 30 L45 30 Z M25 15 L35 25 M60 15 L50 25" 
            fill="#2563EB" 
          />
          <text 
            x="75" 
            y="35" 
            fontFamily="Arial" 
            fontSize="32" 
            fontWeight="bold" 
            fill="#2563EB"
          >
            Mailmind
          </text>
        </svg>

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
