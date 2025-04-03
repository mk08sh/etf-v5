import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// This would typically come from a CMS or database
const experiments = [
  {
    id: 'experiment-1',
    title: 'Experiment 1',
    description: 'Description of the first experiment',
  },
  {
    id: 'experiment-2',
    title: 'Experiment 2',
    description: 'Description of the second experiment',
  },
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <Link
              key={experiment.id}
              href={`/experiments/${experiment.id}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{experiment.title}</h2>
              <p className="text-gray-600">{experiment.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}