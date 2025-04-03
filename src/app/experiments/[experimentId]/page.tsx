import { ExperimentFrame } from '@/components/ExperimentFrame'

interface ExperimentPageProps {
  params: {
    experimentId: string
  }
}

export default function ExperimentPage({ params }: ExperimentPageProps) {
  return (
    <ExperimentFrame 
      src={`https://${params.experimentId}.vercel.app`}
      title={params.experimentId}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  )
} 