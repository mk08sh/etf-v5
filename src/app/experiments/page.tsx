import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Experiments</h1>
        <p className="text-xl mb-12">
          Explore our tools and experiments designed to enhance neurodivergent strengths.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Mind Mirror</h2>
            <p className="text-gray-600 mb-4">
              An interactive tool to help you visualize and track your cognitive states throughout the day.
            </p>
            <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
            <Link href="/experiments/mind-mirror" className="text-blue-600 hover:text-blue-800">
              Try Mind Mirror
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Focus Flow</h2>
            <p className="text-gray-600 mb-4">
              Tools to help structure time and manage attention across various tasks.
            </p>
            <div className="h-48 bg-gray-100 rounded-lg mb-4"></div>
            <Link href="/experiments/focus-flow" className="text-blue-600 hover:text-blue-800">
              Try Focus Flow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}