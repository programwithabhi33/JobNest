import { LockClosedIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow-lg sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">JN</span>
                        </Link>
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            JobNest
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Companies</Link>
                        <Link to="/post-job" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Post a Job</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About JobNest</Link>
                    </nav>
                    <div className="flex space-x-3">
                        <Link to="/auth" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex gap-2">
                            <LockClosedIcon className="h-5 w-5" />
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header