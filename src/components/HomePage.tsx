import React from 'react';
import { ArrowRight, Brain, Wrench, Map, Activity } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Executive This Function
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Building infrastructure for <span className="text-blue-600 font-semibold">scout brains</span> - 
          enhancing neurodivergent strengths while scaffolding executive function.
        </p>
        <div className="flex justify-center gap-4 mb-16">
          <a 
            href="/experiments" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition flex items-center"
          >
            Try Our Tools <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="/essays" 
            className="px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-50 transition"
          >
            Read Our Research
          </a>
        </div>
      </section>

      {/* Scout Brain Concept */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Brain className="h-10 w-10 text-blue-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">The Scout Brain Hypothesis</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Conventional models treat executive dysfunction as a clinical impairment. But what if these traits are actually evolutionary adaptations?
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Scout Brains: Evolutionary Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <p><strong>Novelty-seeking</strong>: Discovering new resources and opportunities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1 mr-3"></div>
                  <p><strong>Rapid context-switching</strong>: Adapting quickly to changing environments</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1 mr-3"></div>
                  <p><strong>Exploratory cognition</strong>: Making unique connections between ideas</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-500 mt-1 mr-3"></div>
                  <p><strong>Heightened awareness</strong>: Noticing subtle patterns and details</p>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-700">
              Rather than forcing these individuals into "worker-bee" molds, we're building infrastructure for scouts - empowering neurodivergent individuals to thrive by working with their natural cognitive styles.
            </p>
            
            <a 
              href="/essays/scout-brain-hypothesis" 
              className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Read the full hypothesis <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Our Approach</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tool */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Wrench className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Tools</h3>
            <p className="text-gray-600">
              Interactive tools like Mind Mirror that help users monitor cognitive states and provide just-in-time support.
            </p>
            <a href="/experiments" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 text-sm">
              Explore experiments <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          {/* Research */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Activity className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strength-Based Research</h3>
            <p className="text-gray-600">
              Evidence-based approaches focusing on enhancing natural strengths rather than "fixing" perceived deficits.
            </p>
            <a href="/essays" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800 text-sm">
              Read our essays <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
          
          {/* Physical Space */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Map className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Spatial Design</h3>
            <p className="text-gray-600">
              Explorations of how physical environments can be designed to support neurodivergent cognition.
            </p>
            <a href="/spaces" className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-800 text-sm">
              See our spaces <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;