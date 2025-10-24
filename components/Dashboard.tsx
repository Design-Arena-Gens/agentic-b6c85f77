'use client'

import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

interface DashboardProps {
  user: User
}

export default function Dashboard({ user }: DashboardProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Sign Out
          </button>
        </div>

        <div className="space-y-6">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              User Information
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Email:</span>
                <p className="text-gray-800 dark:text-white mt-1">{user.email}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">User ID:</span>
                <p className="text-gray-800 dark:text-white mt-1 font-mono text-sm">{user.id}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Created:</span>
                <p className="text-gray-800 dark:text-white mt-1">
                  {new Date(user.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-green-800 dark:text-green-300 font-semibold">
                  Successfully Authenticated
                </h3>
                <p className="text-green-700 dark:text-green-400 text-sm mt-1">
                  You are now logged in with Supabase Auth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
