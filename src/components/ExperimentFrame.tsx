'use client'

import { useState } from 'react'

interface ExperimentFrameProps {
  src: string
  title: string
  sandbox?: string
}

export function ExperimentFrame({ src, title, sandbox }: ExperimentFrameProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading experiment...</p>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0"
        sandbox={sandbox}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
} 