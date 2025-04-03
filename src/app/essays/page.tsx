import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EssaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Essays & Research</h1>
        <p className="text-xl mb-12">
          Explore our research and perspectives on neurodivergent cognition.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">The Scout Brain Hypothesis</h2>
            <p className="text-gray-500 mb-2">April 2, 2025 • 10 min read</p>
            <p className="text-gray-600 mb-4">
              An exploration of neurodivergent cognition as an evolutionary adaptation rather than a deficit, with implications for how we design tools and environments.
            </p>
            <Link href="/essays/scout-brain-hypothesis" className="text-blue-600 hover:text-blue-800">
              Read full essay
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Designing for Neurodivergent Cognition</h2>
            <p className="text-gray-500 mb-2">March 15, 2025 • 8 min read</p>
            <p className="text-gray-600 mb-4">
              Principles and patterns for creating tools and interfaces that work with rather than against neurodivergent cognitive styles.
            </p>
            <Link href="/essays/designing-for-neurodivergent-cognition" className="text-blue-600 hover:text-blue-800">
              Read full essay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}