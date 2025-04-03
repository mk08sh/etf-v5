import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
        <p className="text-xl mb-12">
          Connect with fellow scout brains, share experiences, and help shape the future of neurodivergent-friendly tools.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Weekly Discussion Groups</h2>
            <p className="text-gray-600 mb-6">
              Join our virtual discussion groups where we explore topics related to neurodivergent cognition, share experiences, and brainstorm solutions.
            </p>
            <div className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-center cursor-pointer">
              Sign Up for Discussions
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contribute to Our Research</h2>
            <p className="text-gray-600 mb-6">
              Help us better understand neurodivergent experiences by participating in our studies and providing feedback on our tools.
            </p>
            <div className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition text-center cursor-pointer">
              Learn About Research Opportunities
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}