// pages/index.jsx
import FAQ from '@/components/Landing/FAQ';

// In your Home component
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ... other components ... */}
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
