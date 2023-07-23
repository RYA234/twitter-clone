import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Header */}

        {/* Sidebar */}
        <Sidebar />


        {/* Feed */}
        <Feed/>
        {/* Modal */}
        <Widgets />
      </main>
    </div>
  )
}