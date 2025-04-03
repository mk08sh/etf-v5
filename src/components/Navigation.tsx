'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Essays', href: '/essays' },
  { name: 'Experiments', href: '/experiments' },
  { name: 'Spaces', href: '/spaces' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-semibold"
          >
            ETF
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm transition-colors hover:text-gray-900',
                  pathname === item.href 
                    ? 'text-gray-900' 
                    : 'text-gray-500'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-md">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </button>
        </nav>
      </div>
    </header>
  )
} 