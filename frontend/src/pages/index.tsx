import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>86hire - Recruitment Platform</title>
        <meta name="description" content="Modern recruitment and hiring platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to 86hire
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Modern recruitment and hiring platform
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">
              This is a full-stack application with:
            </p>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• Next.js frontend</li>
              <li>• FastAPI backend</li>
              <li>• TypeScript support</li>
              <li>• Modern UI/UX</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home 