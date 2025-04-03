import { ExperimentFrame } from '@/components/ExperimentFrame'
import { experiments } from '@/data/experiments'
import { notFound } from 'next/navigation'

interface ExperimentPageProps {
  params: {
    experimentId: string
  }
}

export default function ExperimentPage({ params }: ExperimentPageProps) {
  const experiment = experiments.find(e => e.id === params.experimentId)
  
  if (!experiment || experiment.status !== 'published') {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{experiment.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{experiment.description}</p>
      </div>
      <ExperimentFrame 
        src={`https://${experiment.vercelUrl}`}
        title={experiment.title}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  )
} 