export interface Experiment {
  id: string
  title: string
  description: string
  vercelUrl: string
  status: 'draft' | 'published'
  createdAt: string
}

export const experiments: Experiment[] = [
  {
    id: 'mind-mirror',
    title: 'Mind Mirror',
    description: 'An interactive tool to help you visualize and track your cognitive states throughout the day.',
    vercelUrl: 'mind-mirror.vercel.app',
    status: 'published',
    createdAt: '2024-03-01'
  },
  {
    id: 'focus-flow',
    title: 'Focus Flow',
    description: 'Tools to help structure time and manage attention across various tasks.',
    vercelUrl: 'focus-flow.vercel.app',
    status: 'published',
    createdAt: '2024-03-01'
  }
] 