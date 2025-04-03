import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SpacesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Spaces</h1>
        <p className="text-xl mb-12">
          Explorations of how physical environments can be designed to support neurodivergent cognition.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="h-64 bg-gray-100 rounded-lg mb-6"></div>
            <h2 className="text-2xl font-semibold mb-3">The Focus Nook</h2>
            <p className="text-gray-600">
              A modular space designed to minimize distractions while providing just the right amount of sensory stimulation for deep focus work.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="h-64 bg-gray-100 rounded-lg mb-6"></div>
            <h2 className="text-2xl font-semibold mb-3">The Exploration Zone</h2>
            <p className="text-gray-600">
              A collaborative space designed to facilitate idea exploration and creative connections while managing sensory inputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}