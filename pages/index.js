import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by aaaaaa <code>pages/index.js</code>
        </p>
        <body>
          <a href="#" onclick="window.open('C:/Users/mayol/Desktop/Hackupc2022/Pitifall/Pitifall/pages/index.html'); return false">CLICK ME</a>
          
        </body>
      </main>

      <Footer />
    </div>
  )
}
